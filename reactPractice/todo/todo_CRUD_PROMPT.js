import React, { useState } from 'react'

function TodoList() {

    const [userInput, setUserinput] = useState('')
    const [list, setTodoslist] = useState([])

    const AddTodos = (e) => {
        e.preventDefault()

        if(userInput !==''){
            setTodoslist(prevList=> [...prevList, {id: Date.now(), value: userInput}])
            setUserinput('')
        }
    }

    const UpdatedTodo = (index) =>{
        const editedtodo = prompt("add new todo")
        const newTodos = [...list]
        newTodos[index].value = editedtodo
        setTodoslist(newTodos)
    }

    const DeleteTodo = (id) => {
        setTodoslist(prevlist=> prevlist.filter(item=> item.id !== id))
    }

  return (
    <div style={{"marginLeft" : "20px"}}>
        <h2>Todo List App</h2>
      <div>
        <form onSubmit={AddTodos}>
            <input type='text' value={userInput} onChange={(e)=>setUserinput(e.target.value)} />
            <input type='submit' value='submit' />
        </form>
      </div>
      <div>
        {
            list.map((item, index)=> (
                <div key={index}>
                    {item.value}
                    <button onClick={()=>UpdatedTodo(index)}>Edit</button>
                    <button onClick={()=>DeleteTodo(item.id)}>DELETE</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default TodoList
