
import styled from 'styled-components/native'

import {getTheme} from 'view/theme'

export const Headline = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: ${getTheme('colors', 'highlight')};
  ${getTheme('containerPadding')}
  background-color: ${getTheme('colors', 'primary')};
`
