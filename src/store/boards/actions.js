import { headers, APIURL/*, TESTURL*/ } from '../../config.js'

import { showError } from '../errors/actions'

/*
 * action types
 */

export const POST_NEW_BOARD_OK = 'POST_NEW_BOARD_OK';
export const GET_BOARDS_OK = 'GET_BOARDS_OK';
export const GET_BOARDS_FAIL = 'GET_BOARDS_FAIL';
export const LOADING = 'LOADING';
export const SAVING = 'SAVING';
export const TOOGLE_ADD_FORM = 'TOOGLE_ADD_FORM';


/*
 * action creators
 */

export function getBoardsOk(boards) {
	return {
		type: GET_BOARDS_OK,
		boards,
		loading: false
	};
}

export function getBoardsFail() {
	return {
		type: GET_BOARDS_FAIL,
		loading: false
	};
}

export function addNewBoardOk(board) {
	
	return {
		type: POST_NEW_BOARD_OK,
		board,
		saving: false
	};
}

export function loading(flag) {
	return {
		type: LOADING,
		loading: flag
	};
}

export function saving(flag) {
	return {
		type: SAVING,
		saving: flag
	};
}

export function showAddBoard(flag) {
	return {
		type: TOOGLE_ADD_FORM,
		showAddBoard: flag
	};
}

/*
 * async functions
 */

export function getBoards() {
	return function(dispatch) {
		dispatch(loading(true));

		return fetch(`${APIURL}/boards`, {
			method: 'GET',
			headers,
			mode: 'cors'
		})
			.then(resp => resp.json())
			.then(data => {
				dispatch(getBoardsOk(data));
			})
			.catch(error => {
				dispatch(showError(error));
				dispatch(loading(false));
			});
	};
}

// Add new board
export function addNewBoard(board) {
	return function(dispatch) {
		dispatch(saving(true));

		return fetch(`${APIURL}/boards`, {
			method: 'POST',
			headers,
			mode: 'cors',
			body: JSON.stringify(board)
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				dispatch(addNewBoardOk(data));
				dispatch(showAddBoard(false));
			})
			.catch((error) => {
				dispatch(showError(error));
				dispatch(loading(false));
			});
	};
}

