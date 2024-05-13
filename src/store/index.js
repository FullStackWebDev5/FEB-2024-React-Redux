import { createStore, combineReducers } from 'redux'
import { composeWithDevTools  } from '@redux-devtools/extension'
import countReducer from '../reducers/count' 
import showReducer from '../reducers/show' 

const reducer = combineReducers({
  countReducer,
  showReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store