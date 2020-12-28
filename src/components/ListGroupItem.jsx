import React from 'react'

const ListGroupItem = ({item}) => 
     (
        <li className="list-group-item d-flex justify-content-between align-items-center">
           {item.name}
           <button className="btn btn-danger">{item.badge}</button>
         </li>
    )


export default ListGroupItem
