import React, { Component } from 'react';
import {connect} from 'react-redux';
import SingleHistory from './SingleHistory';

var histStyle = {
	backgroundColor: '#b1c4bb',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)',
	height: '55px',
	textAlign: 'right',
	paddingRight: '16px',
	paddingTop: '14px',
	fontSize: '125%'
}

class EqHistory extends Component {
	render() {
		if (false && this.props.historyExists && this.props.history.length > 0) {
			return this.props.history.map((hist) => {
				return (
					<SingleHistory value={hist} />
				);
			});
		}

		return <div style={histStyle}>MAKE BLANK</div>
	}
}

function mapStateToProps(state) {
	return {
		history: state.history,
		historyExists: state.historyExists
	};
}

export default connect(mapStateToProps)(EqHistory);