import React, { useState, useRef } from 'react';

function TodoApp() {
  const [todosList, setTodosList] = useState([]);
  const newTodoRef = useRef('');
  const [EditedIndex, setEditedIndex] = useState(null)
  const editInputRef = useRef(null);

  const handleAddTodo = () => {
    if (newTodoRef.current.value.trim() !== '') {
      setTodosList([...todosList, { id: Date.now(), text: newTodoRef.current.value }]);
      newTodoRef.current.value = '';
    }
  };

  const handleEditTodo = (index) => {
    console.log(setEditedIndex(index))
    setEditedIndex(index);
  };

  const handleSaveTodo = () => {
    console.log("hi")
    //setTodos(todos.map((item) => item.id === todo.id ? { ...item, text: editInputRef.current.value } : item));
    const newTodosList = [...todosList]
    newTodosList[EditedIndex].text = editInputRef.current.value
    setTodosList(newTodosList)
    setEditedIndex(null);
  };

  const handleCancelTodo = () => {
    setEditedIndex(null)
  }

  const handleDeleteTodo = (id) => {
    setTodosList(todosList.filter((item) => item.id !== id));
  };

  const handleClearTodos = () => {
    setTodosList([])
  }

  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>Todo App</h2>
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        {
          todosList && todosList.length > 0 ? (
            <table style={{ border: "1px solid black" }}>
              <thead>
                <tr>
                  <th>Todo Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  todosList.map((todo, index) => (
                    <tr key={todo.id}>
                      {EditedIndex === index ? (
                        <>
                          <td><input type="text" ref={editInputRef} defaultValue={todo.text} /></td>
                          <td><button onClick={handleSaveTodo}>Save</button></td>
                          <td><button onClick={handleCancelTodo}>Cancel</button></td>
                        </>
                      ) : (
                        <>
                          <td>{todo.text}</td>
                          <td><button onClick={() => handleEditTodo(index)}>Edit</button></td>
                          <td><button onClick={() => handleDeleteTodo(todo.id)}>Delete</button></td>
                        </>
                      )}
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ) : null
        }
      </div>
      <div style={{marginTop: "20px"}}>
        {
          todosList && todosList.length>0 ? <button onClick={handleClearTodos}>Clear Todos</button> : null
        }
      </div>
    </div>
  );
}

export default TodoApp;
