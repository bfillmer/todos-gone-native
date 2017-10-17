
import React from 'react'
import {connect} from 'react-redux'

import {FlatList, Text} from 'react-native'

import {todoList} from 'selectors'

const Item = ({item}) => <Text>{item.text}</Text>

const mapStateToProps = state => ({
  todos: todoList(state)
})

const Container = ({todos}) => (
  <FlatList
    data={todos}
    renderItem={Item}
  />
)

export const Todos = connect(mapStateToProps)(Container)
