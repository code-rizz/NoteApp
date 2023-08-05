//This code is for test purpose

import React from "react";
import { getTodos, addTodo, deleteTodo, editTodo } from "../api/api";

function TodoTest() {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");
  const [editIndex, setEditIndex] = React.useState(null);
  const [editedTodo, setEditedTodo] = React.useState("");

  React.useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async () => {
    try {
      await addTodo(newTodo);
      setNewTodo("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todos:", error);
    }
  };

  const handleDeleteTodo = async (index) => {
    try {
      await deleteTodo(index);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEditTodo = async () => {
    try {
      await editTodo(editIndex, editedTodo);
      setEditIndex(null);
      setEditedTodo("");
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button onClick={handleEditTodo}>Save</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setEditedTodo(todo);
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoTest;
