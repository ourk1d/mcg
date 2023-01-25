import styled from "styled-components"
import {useState} from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
    position: fixed;
    top: 0;
    background-color: #023859;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 30%;
`;


const Img = styled.img`
    top: -3px;
    position: absolute;
    height: 80px;
    width: 350px;
    cursor: pointer;
`;

const Right = styled.ul`
    display: flex;
    width:30%;
    list-style: none;
    justify-content: start;
`;

const Links = styled.li` 
    border-top: 5px  solid #0238593b;
    padding:25px 15px;
    font-size: 16px;
    font-weight: 400;
    color: #dfdfdf;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        background-color: #023c61;
        border-top: 5px  solid #c52501;
        color: white;
    }
`;

const Wrapper2 =styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const Links2 = styled.li`
    border-bottom: 2px  solid #024a77 ;
    display: flex;
    padding:10px 15px;
    font-size: 16px;
    font-weight: 400;
    color: #d4d4d4;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color: white;
        border-bottom: 2px  solid #c52501;
    }
`;




const SecondLine = styled.div`
    width: 100%;
    background-color: #024a77;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Link = styled.a`
    float: none;
    text-decoration: none;
    color: #dfdfdf;
    transition: 0.5s;
    &:hover{
        color: white;
    }`;





const Navbar = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => { 
      setIsShown(current => !current);
    };


  return (
    <Container>
        <Wrapper>
            <Left>
            <Img src="https://i.ibb.co/PGTPQGK/Logo.png"/>
            </Left>
            <Right>
                <Links onClick={handleClick} style={{backgroundColor: isShown ? '#024a77' : ''}}>
                    <Link>Vehiculos </Link>
                </Links>
                <Links>
                    <Link href="">Vida</Link>
                </Links>
                <Links>
                    <Link href="">Alquileres</Link>
                </Links>
                <Links>
                    <Link href="">Agricolas</Link>
                </Links>
                <Links>
                    <Link href=""><MailOutlineIcon sx={{ fontSize: 22 }}/></Link>
                </Links>
            </Right>
        </Wrapper>

        <SecondLine style={{display: isShown ? 'flex'  : 'none'}}>
            <Wrapper2>
                <Left></Left>
                <Right>
                <Links2>
                    <Link href="">Automoviles</Link>
                </Links2>
                <Links2>
                    <Link href="">Motocicletas</Link>
                </Links2>
                <Links2>
                    <Link href="">Camiones</Link>
                </Links2>
                </Right>
            </Wrapper2>
        </SecondLine>
    </Container>
  )
}

export default Navbar