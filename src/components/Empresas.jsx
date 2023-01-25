import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    padding: 20px;
    background-color: #0367A6 ;
`;

const Title = styled.h3`
    padding: 10px;
    text-align: center;
    color: #d4d4d4;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const Img = styled.img`
    width: 110px;
    margin:10px 20px 0px 20px;
    border-radius: 16px;
`;


const Empresas = () => {
  return (
    <Container>
        <Title>Trabajamos con las mejores aseguradoras</Title>
        <Wrapper>
            <Img src="https://i.ibb.co/qFKBYnF/1.png"/> 
            <Img src="https://i.ibb.co/frkFc76/2.png"/>
            <Img src="https://i.ibb.co/vskH9q9/4.png"/>
            <Img src="https://i.ibb.co/34FVCD1/5.png"/>
            <Img src="https://i.ibb.co/5MsSqn6/6.png"/>
        </Wrapper>
    </Container>
  )
}

export default Empresas