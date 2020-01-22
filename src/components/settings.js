import React, {Fragment} from "react";
import Header from './common/header';

import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/settings/actions';


function Settings() {
const dispatch = useDispatch();

const setLight = () => {
	dispatch(changeTheme('light'))
}
const setDark = () => {
	dispatch(changeTheme('dark'))
}

  return (
    <Fragment>
      <Header />
      <main>
        <h2>Settings</h2>
        <button onClick={setLight}>Light</button>
        <button onClick={setDark}>Dark</button>
      </main>
    </Fragment>
  );
}

export default Settings;