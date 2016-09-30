const initialState = {
	result: 0,
	history: [],
	currentNum: '',
	currentEquation: '',
	numClicked: false,
	opClicked: false,
	equalPressed: false
}

export default function(state = initialState, action) {

	switch(action.type) {

	case 'SELECT_NUMBER':
		console.log("INTO REDUCER" + action.payload)
		var temp = {...state,
			currentNum: state.currentNum + action.payload
		}
		console.log(temp);
		console.log(state);
		return {
			...state,
			currentNum: state.currentNum + action.payload
		};
	}
	
	return state;
	
}