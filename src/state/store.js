
import {createStore} from 'redux'
import {map} from 'redux-data-structures'

import {ADDED_TODO} from 'types'

// @NOTE If the app grows in complexity we would move this to its own file, add depth
// to our state, etc.
const reducer = map({
  addActionTypes: [ADDED_TODO],
  keyGetter: action => action.payload.key
})

export const store = createStore(reducer)
