export function selectNum(number) {
	return {
		type: 'SELECT_NUMBER',
		payload: number
	};
}

export function selectOp(operation) {
	return {
		type: 'SELECT_OP',
		payload: operation
	};
}

export function back() {
	return {
		type: 'BACK'
	}
}

export function calculate() {
	return {
		type: 'CALCULATE'
	}
}

export function clear() {
	return {
		type: 'CLEAR'
	}
}