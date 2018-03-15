import React, { Component } from 'react';
import './App.css';
import InputComponent from './input_component';
import ListComponent from './list_component';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			tasks: ['task1','task2','task3']
		}
	}

	_updateTask = (val)=>{
		let temp = this.state.tasks;
		temp.push(val);
		this.setState({tasks: temp})
	}
	
    _removeTask = (index) =>{
		let temp = this.state.tasks;
		temp.splice(index, 1);
		this.setState({tasks:temp})
    }

	render() {
		return (
			<div className="App">
				<h1> To-Do App </h1>
				<InputComponent updatetask={this._updateTask} />
				<br />
				<ListComponent task={this.state.tasks} removetask={this._removeTask} />
			</div>
		);
	}
}

export default App;
