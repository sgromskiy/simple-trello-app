import { headers, APIURL/*, TESTURL*/ } from '../../config.js'

//import { showError } from './error.js'

/*
 * action types
 */

export const POST_NEW_BOARD_OK = 'POST_NEW_BOARD_OK';
// export const POST_NEW_FISH_FAIL = 'POST_NEW_FISH_FAIL';
// export const EDIT_FISH_OK = 'EDIT_FISH_OK';
// export const EDIT_FISH_FAIL = 'EDIT_FISH_FAIL';
export const DELETE_BOARD_OK = 'DELETE_BOARD_OK';
// export const DELETE_FISH_FAIL = 'DELETE_FISH_FAIL';
export const GET_BOARD_OK = 'GET_BOARD_OK';
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

export function getBoardOk(board) {
	console.log(board)
	return {
		type: GET_BOARD_OK,
		board,
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

// export function addNewFishFail() {
// 	return {
// 		type: POST_NEW_FISH_FAIL,
// 		saving: false
// 	};
// }

// export function editFishOk(fish) {
// 	return {
// 		type: EDIT_FISH_OK,
// 		fish,
// 		saving: false
// 	};
// }

// export function editFishFail() {
// 	return {
// 		type: EDIT_FISH_FAIL,
// 		saving: false
// 	};
// }

export function deleteBoardOk(boardId) {
	return {
		type: DELETE_BOARD_OK,
		boardId
	};
}

// export function deleteFishFail() {
// 	return {
// 		type: DELETE_FISH_FAIL,
// 	};
// }

export function loading() {
	return {
		type: LOADING,
		loading: true
	};
}

export function saving() {
	return {
		type: SAVING,
		saving: true
	};
}

export function showAddBoard(flag) {
	console.log(2)
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
		dispatch(loading());

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
				console.log('err')
				//dispatch(getBoardsFail());
				//dispatch(showError(error));
			});
	};
}

export function getBoard(id) {
	return function(dispatch) {
		dispatch(loading());

		return fetch(`${APIURL}/boards/${id}`, {
			method: 'GET',
			headers,
			mode: 'cors'
		})
			.then(resp => resp.json())
			.then(data => {
				dispatch(getBoardOk(data));
			})
			.catch(error => {
				console.log('err')
				//dispatch(getBoardFail());
				//dispatch(showError(error));
			});
	};
}

export function addNewBoard(board) {
	return function(dispatch) {
		dispatch(saving());

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
				console.log('4')
				dispatch(addNewBoardOk(data));
				dispatch(showAddBoard(false));
			})
			.catch((error) => {
				//dispatch(showError(error));
				//dispatch(addNewFishFail());
			});
	};
}

// export function editFish(fish) {
// 	return function(dispatch) {
// 		dispatch(saving());

// 		return fetch(`${APIURL}/fishes/${fish._id}`, {
// 			method: 'PUT',
// 			headers,
// 			mode: 'cors',
// 			body: JSON.stringify(fish)
// 		})
// 			.then((resp) => {
// 				return resp.json();
// 			})
// 			.then((data) => {
// 				dispatch(editFishOk(data));
// 			})
// 			.catch((error) => {
// 				dispatch(showError(error));
// 				dispatch(editFishFail());
// 			});
// 	};
// }

export function deleteBoard(boardId) {
	return function(dispatch) {
		dispatch(saving());

		return fetch(`${APIURL}/boards/${boardId}`, {
			method: 'DELETE',
			headers,
			mode: 'cors'
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				dispatch(deleteBoardOk(data.result[0]));
			})
			.catch((error) => {
				//dispatch(deleteFishFail());
				//dispatch(showError(error));
			});
	};
}
