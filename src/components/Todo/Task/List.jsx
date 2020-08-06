import React, { Component } from 'react'
import TaskItem from './Item.jsx'

class TaskList extends Component {
	constructor(props) {
	    super(props);
	}

	render () {
		const { todos, actions } = this.props;

		return (
			<div>
				<h3>Todo</h3>
				<ul id="incomplete-tasks">
					{todos.map(todo =>{
                        if (!todo.marked) {
                        	return(<TaskItem todo={todo} key={todo.id} {...actions}/>)
                        }
					})}
				</ul>
			</div>
		)
	}
}

export default TaskList