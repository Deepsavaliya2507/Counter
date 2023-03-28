import React, { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className='my-5'>
      <button
        onClick={() => setCounter(counter + 1)} className="btn btn-success size mx-2">increase (+)
      </button>
      <span className="counter fs-2"> {counter} </span>
      <button
        onClick={() => setCounter(counter - 1)} className="btn btn-danger size mx-2">decrease (-)
      </button>
    </div>
  )
}

export default Counter;
