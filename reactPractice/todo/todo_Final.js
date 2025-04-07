
import React, { useState, useRef, useCallback } from 'react';

function TodoApp() {
  const [todosList, setTodosList] = useState([]);
  const newTodoRef = useRef('');
  const [editedIndex, setEditedIndex] = useState(null);
  const editInputRef = useRef(null);

  const handleAddTodo = useCallback(() => {
    const newTodoText = newTodoRef.current.value.trim();
    if (newTodoText) {
      setTodosList(prevList => [...prevList, { id: Date.now(), text: newTodoText }]);
      newTodoRef.current.value = '';
    }
  }, []);

  const handleEditTodo = useCallback((index) => {
    setEditedIndex(index);
  }, []);

  const handleSaveTodo = useCallback(() => {
    if (editedIndex !== null) {
      setTodosList(prevList => {
        const updatedList = [...prevList];
        updatedList[editedIndex].text = editInputRef.current.value;
        return updatedList;
      });
      setEditedIndex(null);
    }
  }, [editedIndex]);

  const handleCancelTodo = useCallback(() => {
    setEditedIndex(null);
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodosList(prevList => prevList.filter(item => item.id !== id));
  }, []);

  const handleClearTodos = useCallback(() => {
    setTodosList([]);
  }, []);

  return (
    <div style={{ marginLeft: '20px' }}>
      <h2>Todo App</h2>
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {todosList.length > 0 && (
          <table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>Todo Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todosList.map((todo, index) => (
                <tr key={todo.id}>
                  {editedIndex === index ? (
                    <>
                      <td>
                        <input
                          type="text"
                          ref={editInputRef}
                          defaultValue={todo.text}
                        />
                      </td>
                      <td>
                        <button onClick={handleSaveTodo}>Save</button>
                      </td>
                      <td>
                        <button onClick={handleCancelTodo}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{todo.text}</td>
                      <td>
                        <button onClick={() => handleEditTodo(index)}>Edit</button>
                      </td>
                      <td>
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        {todosList.length > 0 && <button onClick={handleClearTodos}>Clear Todos</button>}
      </div>
    </div>
  );
}

export default TodoApp;
