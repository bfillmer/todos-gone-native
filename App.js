import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

const Headline = styled.Text`
  font-size: 20;
  color: #a00;
`

const App = () => (
  <Container>
    <Headline>A Headline</Headline>
    <Text>Leveraging styled-components now.</Text>
  </Container>
)

export default App
