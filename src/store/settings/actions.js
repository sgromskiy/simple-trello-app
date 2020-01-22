

export const SET_THEME_OK = 'SET_THEME_OK';


function setThemeOk(name) {
	return {
		type: SET_THEME_OK,
		theme: name
	}
}

export function changeTheme(name) {
	return function(dispatch) {
		localStorage.setItem('themeName', name);
		dispatch(setThemeOk(name));
	}
}


export function readTheme() {
	return function(dispatch) {
		const theme = localStorage.getItem('themeName');
		if(theme) {
			dispatch(setThemeOk(theme));
		} else {
			dispatch(setThemeOk('light'));
		}
	}
}
