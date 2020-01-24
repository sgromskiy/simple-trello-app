import React, {Fragment} from "react";
import Header from '../common/header';

import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../store/settings/actions';
import image from "./revan.png"


function Settings() {
const dispatch = useDispatch();
const theme = useSelector(state => state.settings.theme);

const setLight = () => {
	dispatch(changeTheme('light'))
}
const setDark = () => {
	dispatch(changeTheme('dark'))
}

  return (
    <Fragment>
      <Header />
      <main className="settings-page">
        <div className="container">
          <h2>Settings</h2>
          <h3>Which side are you on?</h3>
          
          <div className="image-holder">
            <img src={image} alt="" />
            <span />
            <button className={theme === "light" ? "light-side active" : "light-side" } onClick={setLight}>Light</button>
            <button className={theme === "dark" ? "dark-side active" : "dark-side" } onClick={setDark}>Dark</button>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Settings;