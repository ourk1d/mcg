import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    background-color: #ffffff68;
    padding-top: 100px;
    `;


const Title = styled.h1`
    text-align: center;
`;


const Img = styled.img`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
`;

const Text = styled.p`
    padding: 10px 50px;
    line-height: 40px;
    font-size: 20px;
`;




const Info = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Por que elegirnos?</Title>
            <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias exercitationem recusandae dolor. Ipsam ipsum iste nostrum? In sit architecto adipisci? Voluptates eveniet aperiam amet optio excepturi temporibus incidunt totam, architecto voluptatem quaerat? Dignissimos illo commodi minima nobis a aspernatur quis, distinctio aliquam optio. Omnis nihil ipsam quasi molestiae explicabo libero illum sapiente, ullam, voluptas ab, quae sed sit voluptatem commodi harum facilis accusantium neque. Perferendis harum aperiam officiis suscipit fugiat rem libero non atque!</Text>
            <Img src="https://i.ibb.co/z5WNjb9/212141901-4469468316417843-8406444301116587481-n.jpg" />
        </Wrapper>
    </Container>
  )
}

export default Info