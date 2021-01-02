import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTask } from "./redux/actions";
const Form = () => {
  const [register, handleSubmit, errors] = useForm();
  const dispatch = useDispatch();
  // dispatch(addTask(form));

  return (
    <div className="col-md-4">
      <div className="form">
        {/* {errorMessage} */}
        <form
          method="post"
          className="card card-body p-3 mt-3"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Task:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Write a task..."
              autoFocus
              data-testid="inputTask"
              ref={register}
            />
          </div>
          <button type="submit" className="btn btn-info" data-testid="boton">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
