import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideError } from "../../store/errors/actions";

function ErrorMessage() {
  const errors = useSelector(state => state.errors.data);
  console.dir(errors)
  const dispatch = useDispatch();
  const deleteMessage = (e) => {
    dispatch(hideError(e.target.dataset.id));
  }

  if(errors.length) {
    return (
     <div id="message-container">
        {errors.map(err => {
          return (
              <div className="message" key={err.id}>
                <button onClick={deleteMessage} data-id={err.id}>&times;</button>
                 <p>{err.message ? err.message : "Opps, something went wrong.."}</p>
              </div>
            )
          })
        }
      </div>
    );
  } else {
    return null;
  }

}

export default React.memo(ErrorMessage);