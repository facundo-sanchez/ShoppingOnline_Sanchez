import React, { Fragment } from 'react';
import '../styles/CssTransition.css'
import Styles from '../styles/itemBuy.module.css';
import {addStockItem,subtractStockItem,itemBuy} from '../hooks/UserItem';
import { useState,useEffect } from 'react/cjs/react.development';

//item buy
export default function ItemDetails({item}) {
  const [stock, setStock] = useState(0);

  useEffect(() => {
    item ? setStock(1) : setStock(0);
  }, [item]);

  return (
    <Fragment>
  
      <article className={Styles.itemCount__conteiner}>
        <ItemShopping item = {item}/> 
        <CountItem 
          item = {item} 
          stock = {stock} 
          setStock = {setStock}
        />
      </article>

    </Fragment>
   )
}

const ItemShopping = ({item})=>{
  return (

      <div className={Styles.item__for__buy}>
            [PAGE Details]
            <div className={Styles.item__img}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png" alt="#" />
            </div>
            <div className={Styles.item__information}>
                <h3>${item.price}</h3>
                <p>Produc:{item.produc}</p>
                <p>Description:{item.description}</p>
                <p>stock:{item.stock}</p>
            </div>
      </div>

  )
}

const CountItem = ({item,stock,setStock})=>{

  const addStock = ()=>addStockItem({item,stock,setStock});

  const subtractStock = ()=>subtractStockItem({stock,setStock});

  const buyItem = ()=> itemBuy({item,stock});

  return (
    <div className={Styles.item__count}>
          <div className={Styles.title__count}>
            <h2>Elegir cantidad</h2>
          </div>
          <div className={Styles.item__buttons}>
            <button onClick={subtractStock}>-</button>
            <span>{stock}</span>
            <button onClick={addStock}>+</button>
          </div>
          <div className={Styles.icon__buy}>
            <button onClick={buyItem}>Buy</button>
          </div>
    </div>
  );
}

