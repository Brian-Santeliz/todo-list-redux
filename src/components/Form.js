import React from "react";

const Form = () => {
  return (
    <div className="col-md-3">
      <div className="form">
        <form method="post">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
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
