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
		console.log(this.props.currentNum)
		if (this.props.equalPressed) {
			return
				<div style={resultStyle}>
					RESULT
				</div>;
		}

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
		equalPressed: state.click.equalPressed
	};
}

export default connect(mapStateToProps)(Results);
