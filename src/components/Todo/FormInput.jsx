import React, { Component } from 'react'

class FormInput extends Component {
	constructor(props) {
	    super(props);
	    this.todoInput = React.createRef();
	}

	handleInput = e => {
        e.preventDefault()

        const taskName = this.todoInput.current.value
        this.props.addTodo(taskName);

        // // reset and focus again on input form
        // this.todoInput.current.value = ''
        // this.todoInput.current.focus()
    }

	render () {
		return (
			<div>
				<form onSubmit={this.handleInput}>
					<h2>TODO LIST</h2>
					<h3>Add Item</h3>
					<p>
						<input id="new-task" type="text" ref={this.todoInput}/>
						<button type="submit">Add</button>
					</p>
				</form>
			</div>
		)
	}
}

export default FormInput