import React, { Component } from 'react';
import {connect} from 'react-redux';

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
	opPress(val) {
		console.log(val);
	}
	render() {
		return (
			<div style={centerDiv}>
				<Add style={operationDiv} onClick={() => this.opPress('+')} size={60}/>
				<Sub style={operationDiv} onClick={() => this.opPress('-')} size={60}/>
				<Div style={operationDiv} onClick={() => this.opPress('/')} size={60}/>
				<Mult style={operationDiv} onClick={() => this.opPress('x')} size={60}/>
			</div>
		)
	}
}

export default connect()(Operations);