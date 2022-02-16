import {React,useContext,useState} from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { CartContext } from '../../context/CartContext'
import Styles from '../../styles/CartShopping.module.css';

export default function ItemFavorites() {

  const {selectFavorites} = useContext(CartContext);
  const {deleteFavorites} = useContext(CartContext);
  const [selectProduct, setselectProduct] = useState(false);

  return (
    <div className={Styles.container__cart__shopping}>
      <div className={Styles.container__cart__header}>
        <h2>Favorites details</h2>
      </div>
    
      <div className={Styles.container__cart}>
        <div className={Styles.container__cart__colum}>

        {selectFavorites.length === 0&&(
            <Fragment>
              <div className={Styles.cart__empty}>
                <span>Empty cart :(</span>
              </div>

            </Fragment>
            
          )}
         {selectFavorites.length > 0&&(
            <Fragment>
              {selectFavorites.map(({item})=>(
                <ItemsFavorites key = {item.id} item = {item} deleteFavorites = {deleteFavorites} />
              ))}
            </Fragment>
          )}
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
const ItemsFavorites =({item,deleteFavorites})=>{

    const deleteItem = ()=>{
        deleteFavorites(item);
    }
    
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
          <span className={Styles.item__price}>${item.price}</span>
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