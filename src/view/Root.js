import React from 'react'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'

import {StatusBar} from 'react-native'

import {Wrapper, Headline} from 'view/Atoms'
import {AddTodo} from 'view/AddTodo'
import {Todos} from 'view/Todos'

import {theme} from 'view/theme'
import {store} from 'state/store'

export const Root = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Wrapper>
        <StatusBar hidden />
        <Headline />
        <AddTodo />
        <Todos />
      </Wrapper>
    </Provider>
  </ThemeProvider>
)
