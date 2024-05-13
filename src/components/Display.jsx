import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { display, hide } from '../actions/show'

function Display() {
  const show = useSelector((store) => store.showReducer.show)
  const dispatch = useDispatch()

  const handleClick = () => {
    if(show) {
      dispatch(hide())
    } else {
      dispatch(display())
    }
  }

  return (
    <div>
      {show && <h1>I love React.js</h1>}
      <button onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export default Display