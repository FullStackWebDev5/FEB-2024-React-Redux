import { INCREMENT, DECREMENT } from "../actions/count"

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default reducer
















/*
  Reducer function should return a new state based on action.type
*/