import React, { useState } from 'react'

function useCounter(initialState=0, value) {

    const [count, setCount] = useState(initialState)

    const increment = () => {
        setCount((prevCount) => prevCount + value)
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - value)
    }

    const reset = () => {
        setCount(initialState)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
