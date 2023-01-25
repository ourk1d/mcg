import React from 'react'
import {useState} from 'react';
import styled from 'styled-components'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Container = styled.main`
  z-index: 2;
`;


const Taxi = styled.div`
  text-align: center;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  background-color: #000000a0;
  width: 200px;
  height: 250px;
  position: fixed;
  padding: 10px;
  margin: 25px;
  bottom: 70px;
  right: 0;  
  align-items: center;
  justify-content: space-evenly;
`;

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000a0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  margin: 20px;
  bottom: 0;
  right: 0;
  color: #ffd000;
  cursor: pointer;
  &hover{
    background-color: black;

  }

`;

const Texto = styled.p`
  padding: 5px;
  color: white;
`;


const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #${props=>props.color} ;
    cursor:pointer;
`;



const Alerta = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => { 
    setIsShown(current => !current);
  };

  return (
    <Container>
      <Taxi style={{display: isShown ? 'flex' : 'none'}}>
          <Texto>
            Ahora tambien te llevamos seguro! 
          </Texto>
          <Texto>
            Pedi tu taxi al 099 999 999 
          </Texto>
          <Texto>
            o a nuestro
          </Texto>
          <Texto>
             Whatasapp
          </Texto>
          <SocialIcon color='25D366'>
            <WhatsAppIcon sx={{ fontSize: 30 }}/>
          </SocialIcon>
      </Taxi>
      <Alert onClick={handleClick}>
        <LocalTaxiIcon  sx={{ fontSize: 40 }}/>
      </Alert>
    </Container>
  )
}

export default Alerta