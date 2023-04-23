import React, { useState } from "react";

function Item({ name, category }) {

  const[inCart,setInCart]=useState(false)

  function handleClick(){
    setInCart((inCart)=>!inCart)
  }
  return (
    <li className={inCart? "in-Cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart? "add":"remove"} onClick={handleClick}>{inCart? "remove from": "add to"}</button>
    </li>
  );
}

export default Item;
