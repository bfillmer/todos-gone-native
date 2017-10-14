
import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components/native'

import {TextInput} from 'view/Atoms'

const AddInput = styled(TextInput)`
  font-size: 20;
`

class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <AddInput
        placeholder='I need to do...'
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    )
  }
}

export const AddTodo = connect()(Container)
