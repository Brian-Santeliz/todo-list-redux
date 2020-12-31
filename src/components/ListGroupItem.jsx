import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "./redux/actions";
const ListGroupItem = ({ item }) => {
  const { id, task, state } = item;
  const dispatch = useDispatch();
  const handleDeleteClick = (id) => {
    dispatch(deleteTask(id));
  };
  const handleClickUpdate = (id) => {
    dispatch(updateTask(id));
  };
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{ cursor: "pointer", color: state ? "#bdbbbb" : "#333" }}
      onClick={() => handleClickUpdate(id)}
      data-testid="list-item"
    >
      <span style={{ textDecoration: state ? "line-through" : "" }}>
        {task}
      </span>
      <button className="btn btn-danger" onClick={() => handleDeleteClick(id)}>
        ELIMINAR
      </button>
    </li>
  );
};

export default ListGroupItem;
