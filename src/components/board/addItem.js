import React from "react";
import Loading from "../common/loading";
import useForm from 'react-hook-form'

function AddItem({onAdd, saving, listId}) {
	const { register, handleSubmit, errors, reset } = useForm();

	const onSubmit = data => {
    if(listId) data.in_list = listId;
    data.inDone = false;
    onAdd && onAdd(data);
    reset();
  }

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input disabled={saving} className={errors.name ? 'error' : ''} name="name" defaultValue="" placeholder="Give me a name" ref={register({ required: true })} />
        <button className="btn btn-primary" disabled={saving} type="submit">Save {saving && <Loading size="small" />}</button>
      </form>
    </div>
  );
}

export default AddItem;