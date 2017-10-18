
import {ADDED_TODO, COMPLETED_TODO} from 'types'

// @TODO Add redux-actions (https://github.com/reduxactions/redux-actions) to save on boilerplate
// for actions.

// @NOTE Entirely possible to get duplicate ids, but this is just a throwaway learning project.
export const addTodo = (text) => ({
  type: ADDED_TODO,
  payload: {
    key: Math.round(Math.random() * 100),
    text
  }
})

export const completeTodo = key => ({
  type: COMPLETED_TODO,
  payload: key
})
