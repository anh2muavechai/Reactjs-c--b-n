import React, { Component } from 'react'
class TodoList extends Component {

	constructor(props) {
	    super(props);
	    this.taskInput = React.createRef();
	}

	handleInput = e => {
        e.preventDefault()

        const taskName = this.taskInput.current.value;
        this.props.addItem(taskName);

        // reset and focus again on input form
        this.taskInput.current.value = ''
        this.taskInput.current.focus()
    }

	render () {

		return (
			<div className="todoListMain">
				<div className="header">
                    <form onSubmit={this.handleInput}>
                        <input
                            placeholder="Task"
                            ref={this.taskInput}
                        />
                        <button type="submit"> *Add Task*</button>
                    </form>
                </div>
			</div>
		)
	}
}

export default TodoList