import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementTestValue } from './counterSlice'


function Counter() {
  const count = useSelector(state => state.counter.value)
  const testValue = useSelector(state => state.counter.testValue)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementTestValue())}
        >
         Increment test value
        </button>
        <span>{testValue}</span>
      </div>
    </div>
  )
}

export default Counter