import React, { Fragment } from 'react';
import '../../styles/CssTransition.css'
import Styles from '../../styles/itemBuy.module.css';
import {addStockItem,subtractStockItem,itemBuy} from '../../hooks/userItem';
import { useState} from 'react';


export default function ItemDetails({selectedItem,countBuys,setCountBuys}) {
  const [stock, setStock] = useState(0);


  return (
    <Fragment>
  
      <article className={Styles.itemCount__conteiner}>
        <ItemShopping selectedItem = {selectedItem}/>
        <CountItem selectedItem={selectedItem} stock = {stock} setStock = {setStock}/>

      </article>

    </Fragment>
   )
}

const ItemShopping = ({selectedItem})=>{

  return (

      <div className={Styles.item__for__buy}>
            [PAGE Details]
            <div className={Styles.item__img}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png" alt="#" />
            </div>
            <div className={Styles.selectedItem}>
                <h3>${selectedItem.price}</h3>
                <p>Produc:{selectedItem.produc}</p>
                <p>Category:{selectedItem.category}</p>
                <p>Description:{selectedItem.description}</p>
                <p>stock:{selectedItem.stock}</p>
            </div>
      </div>

  )
}

const CountItem = ({selectedItem,stock,setStock})=>{

  const addStock = ()=>addStockItem({selectedItem,stock,setStock});

  const subtractStock = ()=>subtractStockItem({stock,setStock});

  const addDetails = ()=> itemBuy({selectedItem,stock});

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
            <button onClick={addDetails}>Buy</button>
          </div>
    </div>
  );
}

