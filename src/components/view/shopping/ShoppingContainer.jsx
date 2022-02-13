import {React,useContext} from 'react'
import { CartContext } from '../../context/CartContext'

export default function ShoppingContainer() {

    const {items} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);
    console.log(items)

  return (
    <div>
    
    <h2>Purchase details</h2>
      {items.map(({item})=>(
       <ItemsCart key = {item.id} item = {item} removeItem = {removeItem}/>
      ))}

       
    </div>
  )
}
const ItemsCart =({item,removeItem})=>{
  const deleteItem = ()=>{
    removeItem(item);
  }
  console.log(item);
  return (
    <div>
      
      <div>
     
        <h3>Produc:{item.product}</h3>
        <p>Category:{item.category}</p>
        <p>Description:{item.description}</p>
        <p>Price: {item.price} </p>
        <p>Selected:{item.selected}</p>
        <p>Total:{item.total}</p>
        <button onClick={deleteItem}>Delete</button>
      </div>
    </div>
  )

}