
import styled from 'styled-components/native'

import {getTheme} from 'view/theme'

import {TextInput as DefaultTextInput} from 'react-native'

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  background-color: ${getTheme('colors', 'baseBg')};
`

export const TextInput = styled(DefaultTextInput)`
  ${getTheme('containerPadding')}
`
