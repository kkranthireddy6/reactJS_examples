import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

const initialState = {
  loading: true,
  posts: {},
  error: ''
}

const fetchReducer = (state, action) => {
  const {type, payload} = action;
  switch(type){
    case 'FETCH_SUCCESS'  :
      return {
        loading: false,
        posts: payload,
        error: ''
      }
    case 'FETCH_ERROR' :
      return {
        loading: false,
        posts: {},
        error: 'something went wrong'
      }
    default :
      return state
  }
}

function App() {
 const [state, dispatch] = useReducer(fetchReducer, initialState)
 useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((res)=> {
    dispatch({type: 'FETCH_SUCCESS', loading: false, payload: res.data, error: ''})
  })
  .catch((error)=>{
    dispatch({type: 'FETCH_ERROR', loading: false, posts: {}, error: 'something went wrong'})
  })
 }, [])
  return (
    <div>
      <h2>{state.loading ? 'Loading' : state.posts.title}</h2>
      {state.error ? 'something went wrong' : null}
    </div>
  )
}

export default App
