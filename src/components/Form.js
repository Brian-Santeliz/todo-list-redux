import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const handleChange = ({ target }) => {
    setForm((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };
  const validateForm = (formData) => {
    if (formData.name.trim() === "" || formData.description.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(form);
    //TODO  HACER DISPATCH DE LA ACCION
    setForm({
      name: "",
      description: "",
    });
  };
  const errorMessage = error && (
    <div className="alert alert-danger">Todos los campos son necesarios</div>
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
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleChange}
              value={form.name}
              type="text"
              name="name"
              id="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              onChange={handleChange}
              value={form.description}
              type="text"
              name="description"
              id="description"
              className="form-control"
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
