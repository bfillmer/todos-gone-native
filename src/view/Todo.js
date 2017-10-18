
import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components/native'

import {TouchableHighlight} from 'react-native'

import {completeTodo} from 'actions'
import {getTheme, theme} from 'view/theme'

const Text = styled.Text`
  font-size: 20;
  text-decoration-line: ${props => props.done ? 'line-through' : 'none'};
  color: ${props => props.done ? getTheme('colors', 'accent') : getTheme('colors', 'primary')};
  ${getTheme('containerPadding')}
  border-bottom-width: 1;
  border-bottom-color: ${getTheme('colors', 'primary')};
  border-top-width: ${props => props.index === 0 ? 1 : 0};
  border-top-color: ${getTheme('colors', 'primary')};
`

// Outside of our theme provider we can still get the colors we require for props.
const highlightColor = getTheme('colors', 'highlight')({theme})

const mapStateToProps = (state, {id}) => ({
  done: !!state.completed[id],
  item: state.todos.byId[id]
})

const mapDispatchToProps = {
  completeTodo
}

const Container = ({done, index, item, completeTodo}) => (
  <TouchableHighlight
    onPress={() => completeTodo(item.key)}
    underlayColor={highlightColor}
  >
    <Text index={index} done={done}>{item.text}</Text>
  </TouchableHighlight>
)

export const Todo = connect(mapStateToProps, mapDispatchToProps)(Container)
