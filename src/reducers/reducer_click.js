const initialState = {
	result: 0,
	history: [],
	currentNum: '',
	oldNum: '',
	currentEquation: '',
	currentOp: '',
	opClicked: false,
	equalPressed: false
}

export default function(state = initialState, action) {

	switch(action.type) {

	case 'SELECT_NUMBER':

		if (action.payload == "+/-") {
			var number = state.currentNum;
			number = Number(number);
			number *= -1;
			number = number.toString();

			return {
			  ...state,
			  currentNum: number,
			  equalPressed: false,
			  result: state.result * -1
		  };
		}

		return {
			...state,
			currentNum: state.currentNum + action.payload,
			currentEquation: state.currentEquation + action.payload,
			opClicked: false,
			equalPressed: false,
			result: 0
		};


	case 'SELECT_OP':

		return {
			...state,
			opClicked: true,
			currentEquation: state.currentEquation + action.payload,
			currentNum: '',
			oldNum: state.currentNum,
			currentOp: action.payload,
			equalPressed: false,
			result: 0
		};


	case 'BACK':
		if (!state.opClicked) {
			return {
				...state,
				currentNum: state.currentNum.substring(0, state.currentNum.length - 1),
				currentEquation: state.currentEquation.substring(0, state.currentEquation.length - 1)
			}
		}
		return state;

	case 'CLEAR':

		return {...initialState,
			history: state.history
		};

	case 'CALCULATE':

		//push currentEquation to history
		//calculate and set to result
		//reset everything except history and result
		if (!state.opClicked) {
			var eq1 = Number(state.oldNum);
			var eq2 = Number(state.currentNum);
			var result = 0;
			switch(state.currentOp) {
				case '+':
					result = eq1 + eq2;
					break;

				case '-':
					result = eq1 - eq2;
					break;

				case 'x':
					result = eq1 * eq2;
					break;

				case '÷':
					result = eq1/eq2;
					break;

				default:
					break;
			}

			if (state.history.length > 14) {
				return {
				...initialState,
				result: result,
				equalPressed: true,
				currentNum: result,
				currentEquation: result,
				history: [state.currentEquation]
				}
			}
			
			return {
				...initialState,
				result: result,
				equalPressed: true,
				currentNum: result,
				currentEquation: result,
				history: [...state.history, state.currentEquation]
			}

		}
	}
	
	return state;
	
}