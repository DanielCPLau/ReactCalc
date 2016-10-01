import React, { Component } from 'react';
import {connect} from 'react-redux';

var resultStyle = {
	backgroundColor: '#4e85e3',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)',
	height: '130px',
	textAlign: 'right',
	paddingRight: '15px',
	paddingTop: '25px',
	fontSize: '300%'
}

class Results extends Component {
	render() {
		console.log(this.props);
		if (this.props.result != 0) {
			return (
				<div style={resultStyle}>
					{this.props.result}
				</div>
			);
		}

		if (this.props.currentNum == '' && this.props.oldNum == '') {
			return (<div style={resultStyle}>0</div>)
		}
		else
		return (
			<div style={resultStyle}>
				{this.props.currentNum}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		result: state.click.result,
		currentNum: state.click.currentNum,
		equalPressed: state.click.equalPressed,
		currentEquation: state.click.currentEquation,
		oldNum: state.click.oldNum,
		currentOp: state.click.currentOp,
		history: state.click.history,
		opClicked: state.click.opClicked
	};
}

export default connect(mapStateToProps)(Results);
