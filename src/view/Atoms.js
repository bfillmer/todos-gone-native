
import React from 'react'
import styled from 'styled-components/native'

import {getTheme} from 'view/theme'

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  background-color: ${getTheme('colors', 'baseBg')};
`

const HeadlineText = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: ${getTheme('colors', 'highlight')};
  ${getTheme('containerPadding')}
  background-color: ${getTheme('colors', 'primary')};
`

export const Headline = () => <HeadlineText>Todos Gone Native</HeadlineText>
