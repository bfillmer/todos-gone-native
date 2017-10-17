
import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components/native'

import DefaultButton from 'react-native-button'

import {getTheme} from 'view/theme'
import {addTodo} from 'actions'

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AddInput = styled.TextInput`
  flex: 1;
  font-size: 20;
  ${getTheme('containerPadding')}
`

const Button = styled(DefaultButton)`
  font-size: 20;
  text-align: center;
  color: ${getTheme('colors', 'primary')};
  margin-left: 5;
  margin-right: 5;
`

const mapDispatchToProps = {
  addTodo
}

// @TODO Swap to formik (https://github.com/jaredpalmer/formik) as it is the preferrable way to
// build out forms.
class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    this.props.addTodo(this.state.text)
    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <Wrapper>
        <AddInput
          placeholder='I need to do...'
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.handleSubmit}
        />
        <Button onPress={this.handleSubmit}>
          Add
        </Button>
      </Wrapper>
    )
  }
}

export const AddTodo = connect(null, mapDispatchToProps)(Container)
