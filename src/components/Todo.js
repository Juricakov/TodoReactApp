import React from 'react';
import '../styles/Todo.css';
export default function Todo({
	text,
	completed,
	_id,
	handleToggleTodo,
	handleRemoveTodo,
}) {
	let style = { 'text-decoration': completed ? 'line-through' : 'none' };
	return (
		<div className="todo">
			<div
				className="todo-body"
				style={style}
				onClick={() => handleToggleTodo(_id)}
			>
				<p>{text}</p>
			</div>

			<button className="delete-btn" onClick={() => handleRemoveTodo(_id)}>
				x
			</button>
		</div>
	);
}
