import React from 'react'
import styled from 'styled-components'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { useState } from 'react';
import { sliderItems } from "../data";

const Container = styled.div`
    position: relative;
    top: 5vh;
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    overflow: hidden;
`;




const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1.2s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    border-radius: 2px;
    width: 100vw;
    height:70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
`;


const Arrow = styled.div`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "100px"};
    right: ${props=> props.direction === "right" && "100px"};
    margin: auto ;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
    &:hover{
        opacity: 1;
    }
`;



const ImgContainer = styled.div`
    border-radius: 0px 0px 0px 15px;
    display: flex;
    justify-content: end;
    height: 100%;
    width: 50%;
    overflow: hidden;
`;

const Image = styled.img`
    
`;


const InfoContainer = styled.div`
    border-radius: 0px 0px 15px 0px;
    box-sizing: border-box;
    background-color: #${props=>props.bg};
    padding: 50px;
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;

`;

const Title = styled.h1`
    font-size: 28px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 3px;
`;

const Button= styled.button`
    color: white;
    border: 1px solid #0c4c66;
    width: 200px;
    padding: 10px;
    font-size: 18px;
    background-color: transparent;
    border-radius:10px;
    transition: ease-in 0.3s;
    cursor:pointer;
    &:hover {
        background-color: #ffffff7f;

    }
`;




const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction)=> {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else {
            setSlideIndex(slideIndex < 2? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ChevronLeftRoundedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map((item)=> (           
            <Slide  key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer bg={item.bg} >
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>MAS INFORMACION</Button>
                    </InfoContainer>
            </Slide>))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ChevronRightRoundedIcon/>
        </Arrow>

    </Container>
  )
}

export default Slider