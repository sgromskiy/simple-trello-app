import React from "react";
import Loading from "../common/loading";
import useForm from 'react-hook-form'

function AddItem({onAdd, saving, listId, placeholder}) {
	const { register, handleSubmit, errors, reset } = useForm();

	const onSubmit = data => {
    if(listId) data.in_list = listId;
    onAdd && onAdd(data);
    reset();
  }

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input disabled={saving} className={errors.name ? 'error' : ''} name="name" defaultValue="" placeholder={placeholder} ref={register({ required: true })} />
        <button className="btn btn-primary" disabled={saving || errors.name} type="submit">
          {saving ? <Loading size="small" /> : <span className="text">+</span>}
        </button>
      </form>
    </div>
  );
}

export default AddItem;