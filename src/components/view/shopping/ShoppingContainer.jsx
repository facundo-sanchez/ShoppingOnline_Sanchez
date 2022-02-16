import {React,useContext,useState} from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { CartContext } from '../../context/CartContext'
import Styles from '../../styles/CartShopping.module.css';
export default function ShoppingContainer() {

  const {items} = useContext(CartContext);
  const {removeItem} = useContext(CartContext);
  const [selectProduct, setselectProduct] = useState(false);

  return (
    <div className={Styles.container__cart__shopping}>
      <div className={Styles.container__cart__header}>
        <h2>Purchase details</h2>
      </div>
    
      <div className={Styles.container__cart}>
        <div className={Styles.container__cart__colum}>
          {items.length === 0&&(
            <Fragment>
              <div className={Styles.cart__empty}>
                <span>Empty cart :(</span>
              </div>

            </Fragment>
            
          )}
          
          {items.map(({item})=>(
          <ItemsCart key = {item.id} item = {item} removeItem = {removeItem}/>
          ))}
        </div>
        {selectProduct &&(
          <Fragment>
            <div className={Styles.cart__item__details}>
              Mercado
            </div>
          </Fragment>
        )}

      </div>

       
    </div>
  )
}
const ItemsCart =({item,removeItem})=>{
  const deleteItem = ()=>{
    removeItem(item);
  }
  console.log(item);
  return (
    <Fragment>
    
    <div className={Styles.cart__item}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png" alt="#"  />
      </div>
      <div className={Styles.cart__item__description}>
        <div>
          <h3>Produc:{item.product}</h3>
        </div>
        <div>
          <p>Category:{item.category}</p>
        </div>
        <div>
          <span className={Styles.item__price}>${item.total}</span>
        </div>
        <div>
          <button onClick={deleteItem}>Delete</button>
        </div>
      </div>
    </div>

{/* 
      <p>Description:{item.description}</p>
      <p>Price: {item.price} </p>
      <p>Selected:{item.selected}</p>
      <p>Total:{item.total}</p> */}
 
  


    </Fragment>
  )

}