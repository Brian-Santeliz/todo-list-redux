import { useDispatch } from "react-redux";
import { deleteTask } from "./redux/actions";
const ListGroupItem = ({ item }) => {
   const {id, task, state} = item;
  const dispatch = useDispatch();
  const handleDeleteClick = (id) => {
    dispatch(deleteTask(id));
  };
  const handleClickUpdate = (id) => {
     
  };
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{ cursor: "pointer", color: state ? "#bdbbbb" : "#333" }}
      onClick={()=>handleClickUpdate(id)}
    >
      {task}
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteClick(id)}
      >
        ELIMINAR
      </button>
    </li>
  );
};

export default ListGroupItem;
