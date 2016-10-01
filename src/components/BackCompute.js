import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { calculate } from '../actions/index';
import { clear } from '../actions/index';
import { back } from '../actions/index';

var centerStyle = {
	textAlign:'center',
	marginTop: '17px',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)'
}

var operatorStyle = {
	display: 'inline-block',
	width: '29%',
	margin: '18px'
}

class BackCompute extends Component {
	opPress(val) {
		if (val == 'DEL') {
			this.props.back();
		}
		if (val == '=') {
			this.props.calculate();
		}
		if (val == 'C') {
			this.props.clear();
		}
	}
	render() {
		return (
			<div style={centerStyle}>
   			<div className="btn-toolbar">
      		<button  className="btn btn-warning btn-lg" style={operatorStyle} onClick={() => this.opPress('DEL')}>DEL</button>
      		<button  className="btn btn-success btn-lg" style={operatorStyle} onClick={() => this.opPress('=')}>=</button>
      		<button  className="btn btn-danger btn-lg" style={operatorStyle} onClick={() => this.opPress('C')}>C</button>
   			</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ calculate, clear, back }, dispatch);
}

export default connect(null, mapDispatchToProps)(BackCompute);