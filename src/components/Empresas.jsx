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
    margin: 10px;
    border-radius: 16px;
`;


const Empresas = () => {
  return (
    <Container>
        <Title>Trabajamos con las mejores aseguradoras</Title>
        <Wrapper>
            <Img src="https://i.ibb.co/6gLpfFH/1.png"/>
            <Img src="https://i.ibb.co/8P4J5Pb/2.png"/>
            <Img src="https://i.ibb.co/T1m7RHM/3.png"/>
            <Img src="https://i.ibb.co/MST4ykd/4.png"/>
            <Img src="https://i.ibb.co/N3MngvV/5.png"/>
        </Wrapper>
    </Container>
  )
}

export default Empresas