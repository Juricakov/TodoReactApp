import React from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';
export default function TodoList({
	todos,
	handleToggleTodo,
	handleRemoveTodo,
}) {
	return (
		<div className="todo-list">
			{todos.map((todo) => (
				<Todo
					text={todo.text}
					completed={todo.completed}
					_id={todo._id}
					key={todo._id}
					handleToggleTodo={handleToggleTodo}
					handleRemoveTodo={handleRemoveTodo}
				/>
			))}
		</div>
	);
}
