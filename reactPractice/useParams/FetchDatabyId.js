import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function FetchDatabyId({ match }) {

    const [todos, setTodos] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div style={{"border": "1px solid black", "margin": "10px"}}>
            <center>
                {todos !== null ?
                    <div>{todos.id} {todos.title}</div>
                    : null}
            </center>
        </div>
    )
}

export default FetchDatabyId
