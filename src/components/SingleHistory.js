import React, { Component } from 'react';

export default class SingleHistory extends Component {
	render() {
		return (
			<button className="btn">{this.props.value}</button>
		);
	}
}

