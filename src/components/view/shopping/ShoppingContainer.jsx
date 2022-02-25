import {React,useContext,useState} from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";

import Styles from '../../styles/CartShopping.module.css';
export default function ShoppingContainer() {

  const {items} = useContext(CartContext);
  const {removeItem} = useContext(CartContext);
/*   const {total} = useContext(CartContext);
  const {addTotal} = useContext(CartContext);
  const {subtractTotal} = useContext(CartContext); */
  const {countBuys} = useContext(CartContext);
  const [finish, setFinish] = useState(false);
  //const [total,setTotal] = useState(0);


  const finishBuy = ()=>{
    setFinish(true);
  }

  const backToCart = ()=>{
    setFinish(false);
  }


  return (
    <div className={Styles.container__cart__shopping}>
      <div className={Styles.container__cart__header}>
        <h2>Products: {countBuys}</h2>
        {items.length > 0&&(
          <Fragment>
            <Link to={`/checkout`}>
              <div className={Styles.finish__buy__button}>
                <button onClick={finishBuy}>Finish buying</button>
              </div>
            </Link>
          </Fragment>
        )}
      </div>
    
      <div className={Styles.container__cart}>
        {!finish &&(
          <Fragment>
          <div className={Styles.container__cart__colum}>
            {items.length === 0&&(
                <Fragment>
                  <div className={Styles.cart__empty}>
                    <span>Empty cart :</span>
                  </div>
                </Fragment> 
              )}
              {items.length > 0&&(
                <Fragment>
                  {items.map(({item})=>(
                    <ItemsCart key = {item.id} 
                      item = {item} 
                      removeItem = {removeItem} 
                    />
                  ))}
                </Fragment>
              )}
          </div>
          </Fragment>
        )}
        {finish &&(
          <Fragment>
            <div>
              <button onClick={backToCart}>To cart</button>
            </div>
          </Fragment>

        )}

      </div>
    </div>
  )
}
const ItemsCart =({item,removeItem})=>{
  const [stockSelected, setStockSelected] = useState(item.selected);
  const [total, setTotal] = useState(item.total);
  const deleteItem = ()=>{
    removeItem(item);
  }

  const addStock = (e)=>{
    e.preventDefault();
    if(item.selected < item.stock){
     
      setStockSelected(item.selected+1);
      item.selected = item.selected+1;
      item.total = item.price*item.selected;
      setTotal(item.total)
    }
    
    
  };

  const subtractStock = (e)=>{
    e.preventDefault();
    if(item.selected>1){
      setStockSelected(item.selected-1);
      item.selected = item.selected-1;
      item.total = item.price*(item.selected);
      setTotal(item.total)
    }
    
  };
  return (
    <Fragment>
    
    <div className={Styles.cart__item}>
      <div>
        <img src={item.img} alt="#"  />
      </div>
      <div className={Styles.cart__item__description}>
        <div>
          <h3>Produc:{item.product}</h3>
        </div>
        <div>
        <div className={Styles.item__buttons}>
          <button onClick={subtractStock}>-</button>
            <span>{stockSelected}</span>
          <button onClick={addStock} >+</button>
        </div>
        <span>{item.stock}</span>
        </div>
        <div>
          <span className={Styles.item__price}>{total.toFixed(3)}</span>
        </div>
        <div>
          <button onClick={deleteItem}>Delete</button>
        </div>
      </div>
    </div>

    </Fragment>
  )

}