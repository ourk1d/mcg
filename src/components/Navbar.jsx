import styled from "styled-components"
import {useState} from 'react';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
    position: fixed;
    background-color: #023859;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 50%;
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
    border-top: 5px  solid #ffffff0f;
    padding:25px 15px;
    font-size: 16px;
    font-weight: 400;
    color: #dfdfdf;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        background-color: #023c61;
        border-top: 5px  solid #A62103;
        color: white;
    }
`;

const Wrapper2 =styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const Links2 = styled.li`
    display: flex;
    padding:10px 15px;
    font-size: 16px;
    font-weight: 400;
    color: #d4d4d4;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color: white;
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
                    <Link href=""><MailOutlineIcon sx={{ fontSize: 45 }}/></Link>
                </Links>
            </Right>
        </Wrapper>

        <SecondLine style={{display: isShown ? 'flex'  : 'none'}}>
            <Wrapper2>
                <Left></Left>
                <Right>
                <Links2>
                    <Link href="">Automoviles</Link>
                    <ArrowRightRoundedIcon/>
                </Links2>
                <Links2>
                    <Link href="">Motocicletas</Link>
                    <ArrowRightRoundedIcon/>
                </Links2>
                <Links2>
                    <Link href="">Camiones</Link>
                    <ArrowRightRoundedIcon/>
                </Links2>
                </Right>
            </Wrapper2>
        </SecondLine>
    </Container>
  )
}

export default Navbar