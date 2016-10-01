import React, { Component } from 'react';
import {connect} from 'react-redux';
import SingleHistory from './SingleHistory';

var histStyle = {
	backgroundColor: '#00727F',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)',
	height: '55px',
	textAlign: 'right',
	paddingRight: '16px',
	paddingTop: '8px',
	fontSize: '125%',
	marginBottom: '0',
	paddingBottom: '0'
}

var btnStyle = {
	paddingLeft: '5px'
}

var threeColors = 1;
var keyVal = 0;
class EqHistory extends Component {
	render() {
		if (this.props.history.length > 0) {
			return (
				<ul style={histStyle}>
					{this.props.history.map((hist) => {
						return <SingleHistory color={threeColors++ % 3} key={keyVal++} value={hist} />
					})}
				</ul>
			)
		}

		return <div style={histStyle}></div>
	}
}

function mapStateToProps(state) {
	return {
		history: state.click.history
	};
}

export default connect(mapStateToProps)(EqHistory);