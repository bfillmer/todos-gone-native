
import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components/native'

import {FlatList} from 'react-native'

import {Todo} from 'view/Todo'

import {getTheme} from 'view/theme'

const View = styled.View`
  ${getTheme('containerPadding')};
`

// Change shape to get key react-native expects on items.
const mapStateToProps = state => ({
  ids: state.todos.allIds.map(id => ({key: id, id: id}))
})

const Container = ({ids}) => (
  <View>
    <FlatList
      data={ids}
      renderItem={({index, item}) => <Todo id={item.id} index={index} />}
    />
  </View>
)

export const Todos = connect(mapStateToProps)(Container)
