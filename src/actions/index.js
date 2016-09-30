export function selectNum(number) {
	console.log(number + "PRESSED")
	return {
		type: 'SELECT_NUMBER',
		payload: number
	};
}