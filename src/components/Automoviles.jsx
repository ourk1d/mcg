import React from 'react'
import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Container = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    padding: 15px;
    background-color: lightgray;
`;

const Wrapper = styled.div`
    width: 80%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Form = styled.form`
    display: flex;
    flex-direction:column;
    width: 40%;

`;
const Input = styled.input`
    width: 150px;
    padding: 10px;
    margin: 10px;
`;

const Cellphone = styled.input`
    width: 150px;
    padding: 10px;
    margin: 10px;
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
     margin: 0;
}
    input[type=number] {
  -moz-appearance: textfield;
}
`;


const Send = styled.button`
    width: 100px;
    padding: 10px;
    margin: 10px;
`;
const Details = styled.input`
    width: 250px;
    padding: 10px;
    margin: 10px;
`;
const Year = styled.input`
    width: 70px;
    padding: 10px;
    margin: 10px;
`;

const Message = styled.textarea`
    width: 250px;
    padding: 10px;
    margin: 10px;
`;


const Texto = styled.p`
    padding: 10px;
    font-size:14px;
`;

const Label = styled.label`
    padding: 0px 10px;
    font-size:14px;
`;


const Automoviles = () => {
    const form = useRef();

    const enviarMail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_r2no7zd', 'template_8wevfam', e.target, 'NAYzt5bowpSnOfh-E')
        .then((result) => {
            console.log(form)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <Container>
        <Wrapper>
            <Form ref={form} onSubmit={enviarMail}>
                <Input placeholder='Nombre' name="name" required/>
                <Cellphone type="number" placeholder='Celular'  name="tel" min="091000000" max="099999999" required/>
                <Input placeholder='Email' name="mail" type="email" required/>
                <Texto>
                Por favor especifique lo mas posible el modelo de su vehiculo
                </Texto>
                <Texto>
                Ejemplo: Toyota Corolla Full 5P
                </Texto>
                <Input placeholder='Automovil' name="car" minLength={8} required />
                <Texto>En detalles especifique por ejemplo: Numero de puertas, si tiene o no aire, direccion hidraulica, etc</Texto>
                <Details placeholder='Detalles' name='details' />
                <Year placeholder="Año"type="number" min="1960" max="2025" name="year" required/>
                <Texto>Seleccione las coberturas que quiere cotizar:</Texto>
                <Label>RC
                <Input type="checkbox" name='RC'/> 
                </Label>
                <Label>H,I y RC
                <Input type="checkbox" name='HIRC'/> 
                </Label>
                <Label>Total
                <Input type="checkbox" name='TOTAL'/> 
                </Label>
                <Message placeholder="Dejenos su comentario" name='message'/>
                <Send type='submit'> Enviar </Send>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Automoviles