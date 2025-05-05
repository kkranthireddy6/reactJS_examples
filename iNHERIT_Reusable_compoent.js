import React, { useReducer } from 'react'
import { INITIAL_STATE, postsReducer } from './Reducers'

function TostReducer() {
    const [state, dispatch] = useReducer(postsReducer, INITIAL_STATE)

    const handleFetch = () => {
        dispatch({ type: 'FETCH_START' })
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }

    return (
        <div>
            <button onClick={handleFetch}>
                {state.loading? 'wait...' : 'fetch the post'}
            </button>
            <p>{state.post?.title}</p>
            <span>{state.error?.error}</span>
        </div>
    )
}

export default TostReducer
