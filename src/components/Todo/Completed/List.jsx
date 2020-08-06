import React, { Component } from 'react'
import CompletedItem from './Item.jsx'

class CompletedList extends Component {
	constructor(props) {
	    super(props);
	}

	render () {
		const { todos, actions } = this.props;
		return (
			<div>
				<h3>Completed</h3>
				<ul id="completed-tasks">
					{todos.map(todo => {
						if (todo.marked) {
	                    	return (<CompletedItem todo={todo} key={todo.id} {...actions} />)
						}
                    })}
				</ul>
			</div>
		)
	}
}

export default CompletedList