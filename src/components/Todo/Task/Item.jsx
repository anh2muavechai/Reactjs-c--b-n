import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';

class TaskItem extends Component {

	constructor(props) {
	    super(props)
	    this.TaskItem = React.createRef()
	    this.todoInput = React.createRef()
	    autoBind(this);
	}

	openFormEdit () {
		this.TaskItem.current.classList.add('editMode')
		this.todoInput.current.focus()
	}

	closeFormEdit () {
		this.TaskItem.current.classList.remove('editMode')
	}

	handleSave (id) {
		this.props.editTodo(id, this.todoInput.current.value)
		this.closeFormEdit()
	}

	handleChange () {

	}

	render () {
		const { todo, markTodo, deleteTodo, editTodo } = this.props;

		return (
            <li ref={this.TaskItem}>
				<input type="checkbox" checked={todo.marked} onChange={() => markTodo(todo.id)}/>
				<label>{todo.text}</label>
				{this.renderFormEdit(todo)}
				<button className="edit" onClick={() => this.openFormEdit()}>Edit</button>
				<button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
			</li>
		)
	}

	renderFormEdit (todo) {
		return (
			<React.Fragment>
				<input type="text" ref={this.todoInput}/>
				<button className="save" onClick={() => this.handleSave(todo.id)}>Save</button>
				<button className="cancel" onClick={() => this.closeFormEdit()}>Cancel</button>
			</React.Fragment>
		)
	}
}

export default TaskItem
