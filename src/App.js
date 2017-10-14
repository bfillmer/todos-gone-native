import React from 'react'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'

import {theme} from './view/theme'
import {store} from './state/store'

import {Todo} from './view/Todo'

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Todo />
    </Provider>
  </ThemeProvider>
)

export default App
