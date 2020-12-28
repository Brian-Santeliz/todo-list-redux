import ListGroupItem from './ListGroupItem'
const ListProducts = () => {
  const items = [
    {
      name: "example",
      badge: "Eliminar",
    },
    {
      name: "example",
      badge: "Eliminar",
    },
    {
      name: "example",
      badge: "Eliminar",
    },
    {
      name: "example",
      badge: "Eliminar",
    },
    {
      name: "example",
      badge: "Eliminar",
    },
  ];
  return (
    <ul className="list-group list-group-list-group-flush">
      {items.map((item,i)=>(
          <ListGroupItem key={i} item={item}/>
      ))}
    </ul>
  );
};

export default ListProducts;
