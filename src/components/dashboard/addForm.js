import React, { useState } from "react";
import Loading from "../common/loading";
import useForm from 'react-hook-form'

function AddForm(props) {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => { 
    props.onAdd && props.onAdd(data);
    reset();
  }
  const onCancel = () => {
    reset();
    props.onCancel && props.onCancel();
  }


  return (
    <div className="board-card add-board-button">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={errors.name ? 'error' : ''} name="name" defaultValue="" placeholder="Give me a name" ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}
        <div className="colors">
          <label className="white"><input defaultChecked type="radio" name="color" value="white" ref={register} /> <span>white</span></label>
          <label className="red"><input type="radio" name="color" value="red"  ref={register} /> <span>red</span></label>
          <label className="green"><input type="radio" name="color" value="green"  ref={register} /> <span>green</span></label>
          <label className="blue"><input type="radio" name="color" value="blue"  ref={register} /> <span>blue</span></label>
        </div>
        <div className="buttons">
          <button className="btn" disabled={props.saving} onClick={onCancel} type="button">Cancel</button>
          <button className="btn" disabled={props.saving} type="submit">Save {props.saving && <Loading size="small" />}</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;