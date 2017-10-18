
import {combineReducers, createStore} from 'redux'
import {map, set} from 'redux-data-structures'

import {ADDED_TODO, COMPLETED_TODO} from 'types'

// Set of keys that represent complete todos.
const completed = set({
  toggleActionTypes: [COMPLETED_TODO]
})

// All our todo objects.
const todos = map({
  addActionTypes: [ADDED_TODO],
  keyGetter: action => action.payload.key
})

const reducer = combineReducers({
  completed,
  todos
})

// @TODO Add redux-logger for the console in development mode.
export const store = createStore(reducer)
