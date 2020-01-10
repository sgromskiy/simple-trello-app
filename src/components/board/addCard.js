import React from "react";
import Loading from "../common/loading";
import useForm from 'react-hook-form'

function AddCard({onAdd, saving}) {
	const { register, handleSubmit, errors, reset } = useForm();

	const onSubmit = data => {
    onAdd && onAdd(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input disabled={saving} className={errors.name ? 'error' : ''} name="name" defaultValue="" placeholder="Give me a name" ref={register({ required: true })} />
      <button disabled={saving} type="submit">Add {saving && <Loading size="small" />}</button>
    </form>
  );
}

export default AddCard;