import {useDispatch} from 'react-redux'
import {deleteTask} from './redux/actions'
const ListGroupItem = ({item, id}) => {
   const dispatch = useDispatch()
   const handleDeleteClick = e=>{
      dispatch(deleteTask(id))
   }
     return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
           {item}
           <button className="btn btn-danger" onClick={()=>handleDeleteClick(id)}>ELIMINAR</button>
         </li>
    )}

export default ListGroupItem
