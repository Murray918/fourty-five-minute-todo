import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	state = {
		todos: ['First Item', 'Second Item'],
		inputValue: ''
	}
	// the only thing this should handle is actually the todo to state
	handleCreateTodo = todo => {
		this.setState({
			todos: [todo, ...this.state.todos]
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.handleCreateTodo(this.state.inputValue)
		this.setState({
			inputValue: ''
		})
	}

	handleOnChange = event => {
		this.setState({
			inputValue: event.target.value
		})
	}

	handleDelete = id => {
		// copy state
		let currentState = this.state.todos
		let newState = currentState.filter(item => currentState[id] !== item)
		this.setState({
			todos: newState
		})
	}

	render() {
		const renderedTodos = this.state.todos.map((item, index) => {
			return (
				<li key={index} className="todo">
					{item}
					<button onClick={() => this.handleDelete(index)}>delete</button>
				</li>
			)
		})
		return (
			<div className="App">
				<ul className="todos">{renderedTodos}</ul>
				<form className="add-form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleOnChange}
						value={this.state.inputValue}
					/>
					<input type="submit" value="add" />
				</form>
			</div>
		)
	}
}

export default App
