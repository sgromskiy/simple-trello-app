import { headers, APIURL/*, TESTURL*/ } from '../../config.js'
import uuid from 'uuid/v4';

import { showError } from '../errors/actions.js'

/*
 * action types
 */


export const EDIT_BOARD_OK = 'EDIT_BOARD_OK';
export const DELETE_BOARD_OK = 'DELETE_BOARD_OK';
export const GET_BOARD_OK = 'GET_BOARD_OK';
export const BOARD_LOADING = 'BOARD_LOADING';
export const BOARD_SAVING = 'BOARD_SAVING';
export const POST_NEW_CARD_OK = 'POST_NEW_CARD_OK';

/*
 * action creators
 */

export function getBoardOk(board) {
	return {
		type: GET_BOARD_OK,
		board,
		loading: false
	};
}

export function editBoardOk(board) {
	return {
		type: EDIT_BOARD_OK,
		board,
		saving: false
	};
}

export function preEditBoardOk(board) {
	return {
		type: EDIT_BOARD_OK,
		board
	};
}

export function deleteBoardOk(boardId) {
	return {
		type: DELETE_BOARD_OK,
		boardId
	};
}

export function loading(flag) {
	return {
		type: BOARD_LOADING,
		loading: flag
	};
}

export function saving(flag) {
	return {
		type: BOARD_SAVING,
		saving: flag
	};
}

/*
 * async functions
 */


export function getBoard(id) {
	return function(dispatch) {
		dispatch(loading(true));

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
				console.dir(error)
				dispatch(showError(error));
				dispatch(loading(false));
			});
	};
}

// Add new card
export function addNewCard(card, board) {
	return function(dispatch) {
		card.id = uuid();
		board.cards = [...board.cards, card]
		dispatch(editBoard(board));
	}
}

// Delete card
export function deleteCard(cardId, board) {
	return function(dispatch) {
		board.cards = [...board.cards.filter(card => card.id !== cardId)]
		dispatch(editBoard(board));
	}
}

// aAdd List
export function addNewList(list, board) {
	return function(dispatch) {
		list.id = uuid();
		board.lists = [...board.lists, list]
		dispatch(editBoard(board));
	}
}

// Delete list
export function deleteList(listId, board) {
	return function(dispatch) {
		board.lists = [...board.lists.filter(list => list.id !== listId)];
		board.cards = [...board.cards.filter(card => card.in_list !== listId)];
		dispatch(editBoard(board));
	}
}

// DnD actions handler
export function sortCards(board, {source, destination, draggableId}) {
	return function(dispatch) {

			let new_cards = [...board.cards];
			const el_to_move = new_cards.splice(board.cards.findIndex(card => card.id === draggableId), 1)[0];
			el_to_move.in_list = destination.droppableId;
			const target_idx = destination.index;
			let counter = 0;
			const put_idx = new_cards.findIndex(el => {
				if(el.in_list === destination.droppableId) {
					if(counter === target_idx) {
						return true;
					} else {
						counter++;
					}
				}
				return false;
			});
			new_cards.splice(put_idx, 0, el_to_move);
			board.cards = new_cards;

		dispatch(preEditBoardOk(board));
		dispatch(editBoard(board, true));
	}
}

// Edit board
export function editBoard(board, silent) {

	return function(dispatch) {
		dispatch(saving(true));
		return fetch(`${APIURL}/boards/${board._id}`, {
			method: 'PUT',
			headers,
			mode: 'cors',
			body: JSON.stringify(board)
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if(silent) {
					dispatch(saving( false));
				} else {
					dispatch(editBoardOk(data));
				}
			})
			.catch((error) => {
				silent && dispatch(getBoard(board._id));
				dispatch(showError(error));
				dispatch(saving(false));
			});
	};
}


// Delete board
export function deleteBoard(boardId) {
	return function(dispatch) {
		dispatch(saving(true));

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
				dispatch(showError(error));
				dispatch(saving(false));
			});
	};
}