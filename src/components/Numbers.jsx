import styled from '@emotion/styled/types/base'
import React from 'react'

const Container = styled.div`
    background-color: black;
`;

const Text = styled.p`
    color: yellow;
`;

const Numbers = () => {
  return (
    <Container>
        <Text>Pedi tu SegurTaxi</Text>
    </Container>
  )
}

export default Numbers