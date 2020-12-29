import React from 'react'

const ListGroupItem = ({item}) => {
   const handleDeleteClick = e=>{
      console.log(e.target)
   }
     return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
           {item}
           <button className="btn btn-danger" onClick={handleDeleteClick}>ELIMINAR</button>
         </li>
    )}

export default ListGroupItem
