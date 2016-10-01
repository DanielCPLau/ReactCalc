import React, { Component } from 'react';

var btnColor = {};

export default class SingleHistory extends Component {
	selectColor() {
		if (this.props.color == 0) {
			btnColor = {
				borderRadius: '25px',
				border: '3px solid',
				borderColor: '#9cd9ff'
			}
		}

		if (this.props.color == 1) {
			btnColor = {
				borderRadius: '25px',
				border: '3px solid',
				borderColor: '#ccde44'
			}
		}

		if (this.props.color == 2) {
			btnColor = {
				borderRadius: '25px',
				border: '3px solid',
				borderColor: '#ffa791'
			}
		}
	}
	render() {
		this.selectColor();
		return (
			<button style={btnColor} className="btn btn-secondary">{this.props.value}</button>
		);
	}
}

