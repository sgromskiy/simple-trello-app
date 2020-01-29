import uuid from 'uuid/v4';
/*
 * action types
 */


export const SHOW_ERROR_MSG = 'SHOW_ERROR_MSG';
export const HIDE_ERROR_MSG = 'HIDE_ERROR_MSG';

/*
 * action creators
 */

export function showError(err) {
	const error = {id: uuid(), message: err.message};
	return {
		type: SHOW_ERROR_MSG,
		error
	};
}

export function hideError(id) {
	return {
		type: HIDE_ERROR_MSG,
		id
	};
}
