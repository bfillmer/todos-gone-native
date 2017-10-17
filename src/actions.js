
import {ADDED_TODO} from 'types'

// @TODO Add redux-actions (https://github.com/reduxactions/redux-actions) to save on boilerplate
// for actions.
export const addTodo = text => ({
  type: ADDED_TODO,
  payload: text
})
