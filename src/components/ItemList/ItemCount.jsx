import React from 'react';
import { useState } from 'react/cjs/react.development';
import Styles from '../styles/itemCount.module.css';

export default function ItemCount({Item}) {
  const [stock, setStock] = useState(0);

  return (
  <article className={Styles.itemCount__conteiner}>
    <div className={Styles.item__for__buy}>
      <ItemShopping item = {Item}/>
    </div>
    <div className={Styles.item__count}>
      <CountItem item = {Item} stock = {stock} setStock = {setStock}/>
    </div>
  </article>);
}

const ItemShopping = ({item})=>{
  return (
    <article>
        <div className={Styles.item__img}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png" alt="#" />
        </div>
        <div className={Styles.item__information}>
            <h3>${item.price}</h3>
            <p>Produc:{item.produc}</p>
            <p>Description:{item.description}</p>
            <p>stock:{item.stock}</p>
        </div>

  </article>
  )
}

const CountItem = ({item,stock,setStock})=>{

  const addStock = ()=>{
    if(item.stock > stock){
       setStock(stock+1);
    }
  }

  const subtractStock = ()=>{
    if(stock >0){
      setStock(stock-1);
    }
  }
  const buyItem = ()=>{
    if(stock >0){
      const itemBuy = {
        id:item.id,
        price:item.price,
        produc:item.produc,
        description:item.description,
        stock,
      }
      console.log(itemBuy);
    }

  }

  return (
    <article className={Styles.item__count__container}>
        <div className={Styles.title__count}>
          <h2>Stock</h2>
        </div>
        <div className={Styles.item__buttons}>
          <button onClick={subtractStock}>-</button>
          <span>{stock}</span>
          <button onClick={addStock}>+</button>
        </div>
        <div className={Styles.icon__buy}>
          <button onClick={buyItem}>Buy</button>
        </div>
    </article>
  );
}

