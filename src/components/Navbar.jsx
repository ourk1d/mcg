import styled from "styled-components"
import {useState} from 'react';

const Container = styled.div`
    background-color: #012840;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`

    padding: 10px;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 33%;
`;


const Img = styled.img`
width: 150px;
`;

const Right = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    padding:10px;

`;

const Links = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: white;
    cursor: pointer;
    &:hover{
        font-weight: 500;
    }

`;

const Wrapper2 =styled.div`
    background-color: #023859;
    width: 100%;
    flex-direction: row-reverse;
`;

const ListLinks = styled.div`
    margin-right: 15%;
    display: flex;
    width: 30%;
    padding: 10px;
    font-size: 18px;
    font-weight: 400;
    color: white;
    cursor: pointer;
    align-items: center;
    justify-content: space-evenly;
    &:hover{
        font-weight: 500;
    }

`;








const Navbar = () => {
    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
      // 👇️ toggle visibility
      setIsShown(current => !current);
    };
  return (
    <Container>
        <Wrapper>
            <Left>
            <Img src="https://i.ibb.co/jfvVnw4/MCG-2.png"/>
            </Left>
            <Right>
                <Links onClick={handleClick}>Vehiculos</Links>
                <Links>Vida</Links>
                <Links>Alquileres</Links>
                <Links>Contacto</Links>
            </Right>
        </Wrapper>
        <Wrapper2 style={{display: isShown ? 'flex' : 'none'}}>
        <ListLinks >
            <Links>Automoviles</Links>
            <Links>Motocicletas</Links>
            <Links>Camiones</Links>
        </ListLinks>
        </Wrapper2>
    </Container>
  )
}

export default Navbar