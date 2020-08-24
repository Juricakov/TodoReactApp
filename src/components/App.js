import React, { useState, useRef, useEffect } from 'react';

import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';
import '../styles/App.css';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const textInputRef = useRef();
	useEffect(() => console.log(todos));
	const createTodo = (text) => {
		return { text, completed: false, _id: uuid() };
	};

	const handleAddTodo = () => {
		const text = textInputRef.current.value;
		if (text === '') return;

		textInputRef.current.value = null;
		textInputRef.current.focus();
		const newTodo = createTodo(text);
		setTodos((oldTodos) => [...oldTodos, newTodo]);
	};

	const handleEnterAddTodo = (e) => {
		if (e.key === 'Enter') {
			handleAddTodo();
		}
	};

	const handleToggleTodo = (_id) => {
		let newTodos = [...todos];
		let toggledTodo = newTodos.find((todo) => todo._id === _id);
		toggledTodo.completed = !toggledTodo.completed;
		setTodos(newTodos);
	};

	const handleClearCompleted = () => {
		setTodos((oldTodos) => oldTodos.filter((todo) => !todo.completed));
	};

	const handleRemoveTodo = (_id) => {
		setTodos((oldTodos) => oldTodos.filter((todo) => todo._id !== _id));
	};

	return (
		<>
			<div className="wrapper">
				<div className="todo-list-wrapper">
					<TodoList
						todos={todos}
						handleToggleTodo={handleToggleTodo}
						handleRemoveTodo={handleRemoveTodo}
					/>
				</div>
				<div className="input-wrapper">
					<input
						id="text-input"
						ref={textInputRef}
						type="text"
						onKeyUp={handleEnterAddTodo}
					></input>
					<div className="input-btns">
						<button id="add-btn" onClick={handleAddTodo}>
							Add
						</button>
						<button id="clear-btn" onClick={handleClearCompleted}>
							Clear completed
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
