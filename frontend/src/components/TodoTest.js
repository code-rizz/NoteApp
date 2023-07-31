//This code is for test purpose

import React, { useState } from 'react';
import { getTodos,addTodo,deleteTodo,editTodo } from '../api/api';

function TodoTest(){
    const [todos,setTodo] = React.useState([]);
    const [newTodo,setNewTodo] = React.useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editTodo,setEditTodo] = useState('');

}

export default TodoTest;