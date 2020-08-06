import React, { Component } from 'react'
import autoBind from 'react-autobind';

class CompletedItem extends Component {
	constructor(props) {
	    super(props);
	    autoBind(this);
	}

	render () {
		const { todo, markTodo, deleteTodo } = this.props;

		return (
			<li>
				<input type="checkbox" checked={todo.marked} onChange={() => markTodo(todo.id)} />
				<label>{todo.text}</label>
				<input type="text" />
				<button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
			</li>
		)
	}
}

export default CompletedItem