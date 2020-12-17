import React from "react";

const TaskList = () => {
  return (
    <div className="col-md-8 mt-2 p-2 text-center">
      <div className="d-flex justify-content-center">
        <table className="table table-bordered">
          <td>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </td>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
