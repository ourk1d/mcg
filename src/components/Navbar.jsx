import styled from "styled-components"
import {useState} from 'react';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';

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
top:15px;
position: absolute;
height: 70px;
width: 350px;
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
    &:hover{
        color: white;;
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
    &:hover{
        color: white;
    }`;






const Navbar = () => {
    const [isShown, setIsShown] = useState(true);

    const handleClick = event => { 
      setIsShown(current => !current);
    };


  return (
    <Container>
        <Wrapper>
            <Left>
            <Img src="https://i.imgur.com/9HKVrDX.png"/>
            </Left>
            <Right>
                <Links onClick={handleClick} style={{backgroundColor: isShown ? '#024a77' : '#023859e2'}}>vehiculos</Links>
                <Links>
                    <Link href="">vida</Link>
                </Links>
                <Links>
                    <Link href="">alquileres</Link>
                </Links>
                <Links>
                    <Link href="">contacto</Link>
                </Links>
            </Right>
        </Wrapper>
        <SecondLine style={{display: isShown ? 'flex'  : 'none'}}>
            <Wrapper2>
                <Left></Left>
                <Right>
                <Links2>
                    <Link href="">automoviles</Link>
                    <ArrowRightRoundedIcon/>
                </Links2>
                <Links2>
                    <Link href="">motocicletas</Link>
                    <ArrowRightRoundedIcon/>
                </Links2>
                <Links2>
                    <Link href="">camiones</Link>
                    <ArrowRightRoundedIcon/>
                </Links2>
                </Right>
            </Wrapper2>
        </SecondLine>
    </Container>
  )
}

export default Navbar