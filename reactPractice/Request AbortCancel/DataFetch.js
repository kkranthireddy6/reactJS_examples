import React from 'react'
import Reducers from './Reducers'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <DataFetch />
    </BrowserRouter>
  )
}

export default App
