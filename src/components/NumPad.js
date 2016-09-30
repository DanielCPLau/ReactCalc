import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { selectNum } from '../actions/index';

var tableWidth = {
	tableLayout: 'fixed',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)'
}

var centerStyle = {
	textAlign: 'center',
	width: '10%',
	padding: '25px'
}

class NumPad extends Component {

	render() {
		return (
      <table className="table table-bordered table-inverse" style={tableWidth}>
    		<tbody>
      		<tr>
        		<td style={centerStyle} onClick={() => this.props.selectNum('1')}>1</td>
        		<td style={centerStyle} onClick={() => this.props.selectNum('2')}>2</td>
        		<td style={centerStyle} onClick={() => this.props.selectNum('3')}>3</td>
      		</tr>
      		<tr>
        		<td style={centerStyle} onClick={() => this.props.selectNum('4')}>4</td>
        		<td style={centerStyle} onClick={() => this.props.selectNum('5')}>5</td>
        		<td style={centerStyle} onClick={() => this.props.selectNum('6')}>6</td>
      		</tr>
      		<tr>
        		<td style={centerStyle} onClick={() => this.props.selectNum('7')}>7</td>
        		<td style={centerStyle} onClick={() => this.props.selectNum('8')}>8</td>
        		<td style={centerStyle} onClick={() => this.props.selectNum('9')}>9</td>
      		</tr>
      		<tr>
        		<td style={centerStyle} onClick={() => this.props.selectNum('.')}>.</td>
        		<td style={centerStyle} onClick={() => this.props.selectNum('0')}>0</td>
        		<td style={centerStyle} onClick={() => this.props.selectNum('+/-')}>+/-</td>
      		</tr>
    		</tbody>
  		</table>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectNum }, dispatch);
}

export default connect(null, mapDispatchToProps)(NumPad);