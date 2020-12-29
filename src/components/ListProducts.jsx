import ListGroupItem from './ListGroupItem'
import {useSelector} from 'react-redux'
const ListProducts = () => {
  const {todos}= useSelector(state=>state.todo)
  return (
    <ul className="list-group list-group-list-group-flush">
      {
       !todos.length ? <p className="text-uppercase font-weight-bold">Don't have task</p> : todos.map(({id, task})=>(
          <ListGroupItem key={id} item={task}/>
      ))}
    </ul>
  );
};

export default ListProducts;
