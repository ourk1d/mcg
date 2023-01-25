import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Container = styled.div`
    width: 100%;
    height: 250px;
    background-color: #023859;
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 3;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width:20%;
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.img`
   height: 80px;
    width: 350px;
`;

const Icons = styled.div`
  color: white;
  display: flex;
  margin: 0px 0px 50px 15px;
`;


const Right = styled.div`
  width: 20%;
  margin: 25px 0px;
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  width:20%;
  margin: 25px 0px;
  display: flex;
  justify-content: start;
`;

const List = styled.ul`
  list-style: none;
  line-height:25px;
`;

const Item = styled.li`
    border-left: 2px solid #023859;
    padding:5px 10px;
    font-size: 16px;
    font-weight: 400;
    color: #d4d4d4;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        color: white;
        border-left: 2px solid #c52501;

}`;


const SocialIcon = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #${props=>props.color} ;
    cursor:pointer;
`;


const Text = styled.p`
    display: flex;
    align-items: center;
    padding:5px;
    font-size: 16px;
    font-weight: 400;
    color: #d4d4d4;

`;

const Footer = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
          <Img src="https://i.ibb.co/PGTPQGK/Logo.png"/>
          <Icons>
            <SocialIcon >
              <InstagramIcon sx={{ fontSize: 30 }}/>
            </SocialIcon>
            <SocialIcon >
              <FacebookIcon sx={{ fontSize: 30 }}/>
            </SocialIcon>
            <SocialIcon >
              <LinkedInIcon sx={{ fontSize: 30 }}/>
            </SocialIcon>
            <SocialIcon >
              <WhatsAppIcon sx={{ fontSize: 30 }}/>
            </SocialIcon>
          </Icons>
          </Left>
          <Center>
            <List>
                <Item>Sobre nosotros</Item> 
                <Item>Auxilio mecanico</Item>  
                <Item>En caso de siniestros</Item>  
                <Item>SegurTaxi</Item>  
                <Item>Contacto</Item>  
            </List>    
          </Center>
          <Right>
              <Text><LocationOnIcon/>18 de julio 888</Text>
              <Text><LocationOnIcon/>18 de julio 888</Text>
              <Text><MapIcon/>Melo, Cerro Largo.</Text>
              <Text><LocalPhoneIcon/>099 999 999</Text>
              <Text><MailOutlineIcon/>ejemplo@ejemplo</Text>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Footer