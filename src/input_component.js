import React, { Component } from 'react';

export default class InputComponent extends Component {

    _insertTask= (event) =>{
        event.preventDefault();
        let val = event.target.querySelector('input').value;
        this.props.updatetask(val);
        event.target.querySelector('input').val='';
    }

	render() {
		return (
			<div>
				<form onSubmit={this._insertTask} >
                    <input type="text"/>
                </form>
			</div>
		);
	}
}
