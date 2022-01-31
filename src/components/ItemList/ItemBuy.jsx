import React, { Fragment } from 'react';
import '../styles/CssTransition.css'
import { CSSTransition} from 'react-transition-group';

import { useState,useEffect} from 'react/cjs/react.development';
import Styles from '../styles/itemBuy.module.css';
import {addStockItem,subtractStockItem,buyProduct} from '../hooks/UserItem';
//item buy
export default function ItemBuy({selectBuy}) {
  const [stock, setStock] = useState(0);
  const [buy, setbuy] = useState(false);

  useEffect(() => {
    selectBuy ? setStock(1) : setStock(0);
    selectBuy ? setbuy(true) : setbuy(false);
  }, [selectBuy]);


  return (

    <Fragment>
      <CSSTransition
        in = {buy}
        timeout={300}
        classNames={'active'}
        unmountOnExit>
          <article className={Styles.itemCount__conteiner}>
            <ItemShopping selectBuy = {selectBuy} buy={buy}/> 
            <CountItem 
              selectBuy = {selectBuy} 
              stock = {stock} 
              setStock = {setStock}
            />
            </article>
        </CSSTransition>
    </Fragment>

   )
}

const ItemShopping = ({selectBuy,buy})=>{
  return (

      <div className={Styles.item__for__buy}>
            [PAGE BUY]
            <div className={Styles.item__img}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png" alt="#" />
            </div>
            <div className={Styles.item__information}>
                <h3>${selectBuy.price}</h3>
                <p>Produc:{selectBuy.produc}</p>
                <p>Description:{selectBuy.description}</p>
                <p>stock:{selectBuy.stock}</p>
            </div>
      </div>

  )
}

const CountItem = ({selectBuy,stock,setStock})=>{
  const addStock = ()=>addStockItem({selectBuy,stock,setStock});

  const subtractStock = ()=>subtractStockItem({stock,setStock});

  const buyItem = ()=> buyProduct({selectBuy,stock});

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

