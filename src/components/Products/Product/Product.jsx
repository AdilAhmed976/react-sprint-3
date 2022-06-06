
import React, { useEffect, useState } from "react";

const Product = () => {
  // Note: this id should come from api
  const [item,setitem] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/products')
    .then((r) => (
      r.json()
    ))
    .then((d)=>(
      setitem(d)
    ))
    return () => {
      
    }
  }, [])
  const product = { id: 1 };
    return <div style={{ 
      display:'grid' , 
      gridTemplateColumns:' repeat(4, 1fr)',
      border:'1px solid black', 
      gridTemplateRows:'auto',
      width:'70%',
      margin:'auto',
      gap:'20px'
      }}>
  {item.map(item=>(

    <div key={item.id} data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
 ))}
 </div>;
};


export default Product;
