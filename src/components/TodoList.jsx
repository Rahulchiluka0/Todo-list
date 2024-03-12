import React, { useState } from 'react';
import './TodoList.css'; // Import CSS file
import { verse } from "../assets/verses.json";
let randomId = Math.floor(Math.random() * 701) + 1;
let shlok = verse[randomId].text;

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue('');
    };

    const handleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
    <div className='container'>
        <div className="todo-container">
            <h1>The-Bhagwad-Geeta</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <div className="input-with-button">
                    <input
                        type="text"
                        placeholder="Enter your todo..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        required
                    />
                    <button type="submit">Add Todo</button>
                </div>
            </form>
            <h2>Your Tasks</h2>
            {todos.length === 0 ? (
                <div className='shloka'><p>{shlok}</p></div>
            ) : (
                <ul className="todo-list">
                    {todos.map(todo => (
                        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                            <span
                                onClick={() => handleComplete(todo.id)}
                            >
                                {todo.text}
                            </span>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>)}
        </div>
    </div>

    );
}

export default TodoApp;
