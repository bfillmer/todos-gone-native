
import {createStore} from 'redux'

const initialState = {}

const reducer = (state = initialState, action) => state

export const store = createStore(reducer)
