import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { selectOp, calculate } from '../actions/index';

import Add from 'react-icons/lib/ti/plus';
import Sub from 'react-icons/lib/ti/minus';
import Div from 'react-icons/lib/ti/divide';
import Mult from 'react-icons/lib/ti/times'; 

var centerDiv = {
	textAlign: 'center',
	marginTop: '10px',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)'
}

var operationDiv = {
	display: 'inline-block',
	width: '25%'
}

class Operations extends Component {

	selectOperation(op) {
		if (this.props.currentOp != '' && !this.props.opClicked) {
			this.props.calculate();
		}
		if (this.props.opClicked) {
			return;
		}
		this.props.selectOp(op);
	}

	render() {
		return (
			<div style={centerDiv}>
				<Add style={operationDiv} onClick={() => this.selectOperation('+')} size={60}/>
				<Sub style={operationDiv} onClick={() => this.selectOperation('-')} size={60}/>
				<Div style={operationDiv} onClick={() => this.selectOperation('÷')} size={60}/>
				<Mult style={operationDiv} onClick={() => this.selectOperation('x')} size={60}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		opClicked: state.click.opClicked,
		currentOp: state.click.currentOp
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectOp, calculate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Operations);