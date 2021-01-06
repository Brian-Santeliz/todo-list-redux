import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTask } from "./redux/actions";
const Form = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmitForm = ({ name }) => {
    dispatch(addTask(name));
    reset();
  };
  const error = errors.name?.message;
  return (
    <div className="col-md-4">
      <div className="form">
        {error && (
          <p
            className="alert-danger p-2 text-center text-uppercase font-weight-bold"
            data-testid="alert"
          >
            {error}
          </p>
        )}
        <form
          method="post"
          className="card card-body p-3 mt-3"
          onSubmit={handleSubmit(onSubmitForm)}
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
              ref={register({
                required: "The task is required",
                minLength: {
                  value: 4,
                  message: "Task have a min length of 4 characters",
                },
              })}
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
