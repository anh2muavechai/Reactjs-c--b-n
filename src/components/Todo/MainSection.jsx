import React, { Component } from 'react'
import TaskList from './Task/List.jsx'
import CompletedList from './Completed/List.jsx'

class MainSection extends Component {
	constructor(props) {
	    super(props);
	}

	render () {
		const { todos, actions } = this.props;

		return (
			<div>
				<TaskList todos={todos} actions={actions} />
				<CompletedList todos={todos} actions={actions} />
			</div>
		)
	}
}

export default MainSection
