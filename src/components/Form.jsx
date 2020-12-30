import { useState } from "react";
import { addTask } from "./redux/actions";
import { useDispatch } from "react-redux";
const Form = () => {
  const [form, setForm] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const validateForm = (formData) => {
    if (formData.trim() === "") {
      setError(true);
      return true;
    } else {
      setError(false);
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isError = validateForm(form);
    if (!isError) {
      dispatch(addTask(form));
    }
    setForm("");
  };
  const errorMessage = error && (
    <div className="alert alert-danger text-center text-capitalize">
      The task is required
    </div>
  );
  return (
    <div className="col-md-4">
      <div className="form">
        {errorMessage}
        <form
          method="post"
          className="card card-body p-3 mt-3"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Task:</label>
            <input
              onChange={(e) => setForm(e.target.value)}
              value={form}
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Write a task..."
              autoFocus
            />
          </div>
          <button type="submit" className="btn btn-info">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
