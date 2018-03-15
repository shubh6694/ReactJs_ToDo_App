import React from 'react';

export default class ListComponent extends React.Component {

    remove=(key)=>{
        this.props.removetask(key)
    }

    render() {
        let task = this.props.task.map((i,k)=>{
            return(
                <li key={k}><span> {i} </span><button onClick={()=>this.remove(k)} >X</button> </li>
            );
        })
		return (
			<div>
				<ul>
                    {task}
                </ul>
			</div>
		);
	}
}
