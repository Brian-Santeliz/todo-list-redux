import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const handleChange = ({ target, value }) => {
    setForm((prev) => {
      return {
        ...prev,
        [target]: value,
      };
    });
  };
  return (
    <div className="col-md-3">
      <div className="form">
        <form method="post">
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
              name="Description"
              id="description"
              className="form-control"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
