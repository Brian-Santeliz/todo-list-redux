import {useEffect} from 'react';
import ListGroupItem from './ListGroupItem'
import {useSelector} from 'react-redux'
import Error from './Error'
const ListProducts = () => {
  const {todos, error}= useSelector(state=>state.todo)
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  return (
    <>
    {error && <Error/>}
    <ul className="list-group list-group-list-group-flush">
      {
       !todos.length ? <p className="text-uppercase font-weight-bold">Don't have task</p> : todos.map((item)=>(
          <ListGroupItem key={item.id} item={item}/>
      ))}
    </ul>
  </>
  );
};

export default ListProducts;
