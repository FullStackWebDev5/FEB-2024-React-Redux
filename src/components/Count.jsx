import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions/count';

function Count() {
  const count = useSelector(store => store.countReducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p style={{ fontSize: '10em', margin: '10px 0'}}>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Count