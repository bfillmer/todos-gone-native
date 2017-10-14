
import React from 'react'
import styled from 'styled-components/native'

import {StatusBar} from 'react-native'

import {Wrapper} from 'view/Atoms'
import {Headline} from 'view/Headline'
import {AddTodo} from 'view/AddTodo'

export const Todo = () => (
  <Wrapper>
    <StatusBar hidden />
    <Headline>Todos Gone Native</Headline>
    <AddTodo />
  </Wrapper>
)
