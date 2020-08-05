import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoItems from './TodoItems'
class App extends Component {
	constructor() {
    	super()
    	this.state = {
    		items: [
    		{
    			key: 1,
    			text: "task item a"
    		},
    		{
    			key: 2,
    			text: "text item b"
    		},
    		{
    			key: 3,
    			text: "text item cc"
    		}
    		],
    	}
    }

    addItem = (taskName) => {
    	const newTask = {
    		text: taskName,
    		key: Date.now()
    	}
    	if (taskName !== null && taskName !== '') {
    		const items = [...this.state.items, newTask]
    		this.setState({
    			items,
    		})
    	}
    }

    render() {
    	return (
    		<div>
    			<TodoList addItem={this.addItem} />
    			<TodoItems entries={this.state.items} />
    		</div>
		)
	}
}
export default App