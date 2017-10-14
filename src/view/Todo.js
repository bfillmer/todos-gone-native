
import React from 'react'
import styled from 'styled-components/native'

import {getTheme} from './theme'

import {StatusBar} from 'react-native'

const Container = styled.View`
  display: flex;
  background-color: ${getTheme('colors', 'baseBg')};
`

const Headline = styled.Text`
  font-size: 20;
  color: ${getTheme('colors', 'primary')};
`

const Text = styled.Text`
  color: #333;
`

export const Todo = () => (
  <Container>
    <StatusBar hidden />
    <Headline>Todo App</Headline>
    <Text>Does importing work? Thank goodness.</Text>
  </Container>
)
