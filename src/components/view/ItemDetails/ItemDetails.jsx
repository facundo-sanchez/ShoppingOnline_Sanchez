import React, { Fragment } from 'react';
import '../../styles/CssTransition.css'
import Styles from '../../styles/itemBuy.module.css';
import {addStockItem,subtractStockItem,itemBuy} from '../../hooks/userItem';
import { useState} from 'react';
import { Link } from "react-router-dom";
import {CSSTransition} from 'react-transition-group';


export default function ItemDetails({selectedItem}) {
  const [stock, setStock] = useState(1);
  const [productSelect, setProductSelect] = useState(false);

  return (
    <Fragment>
  
      <article className={Styles.itemCount__conteiner}>
        <ItemShopping selectedItem = {selectedItem}/>
        <CountItem selectedItem={selectedItem} stock = {stock} setStock = {setStock} productSelect = {productSelect} setProductSelect ={setProductSelect}/>

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

const CountItem = ({selectedItem,stock,setStock,productSelect,setProductSelect})=>{

  const addStock = (e)=>{
    e.preventDefault();
    addStockItem({selectedItem,stock,setStock})
  };

  const subtractStock = (e)=>subtractStockItem({stock,setStock});

  const addOn = (e) =>  {
    e.preventDefault();
    setProductSelect(true)
  };

  const addDetails = ()=>itemBuy({selectedItem,stock})
  ;

  return (
    <div className={Styles.item__count}>

      {!productSelect &&(
        <Fragment>
        <div className={Styles.title__count}>
          <h2>Elegir cantidad</h2>
        </div>
        <div className={Styles.item__buttons}>
          <button onClick={subtractStock}>-</button>
          <span>{stock}</span>
          <button onClick={addStock}>+</button>
        </div>
        <div className={Styles.icon__buy}>
          <button onClick={addOn}>Add to cart</button>
        </div>
        </Fragment>
      )}

    
      <CSSTransition
        in = {productSelect}
        timeout={300}
        classNames={'navbar'} //reutilizando clases
        unmountOnExit
       > 
        <Fragment>
          <div className={Styles.icon__buy}>
          <div className={Styles.selectedItem}>
              <h2>Purchase details</h2>
              <p>Price: {selectedItem.price} </p>
              <p>Selected:{stock}</p>
              <p>Produc:{selectedItem.produc}</p>
              <p>Description:{selectedItem.description}</p>
              <p>Category:{selectedItem.category}</p>
              <h3>Total ${selectedItem.price*stock}</h3>
            </div>

            <Link to={'/shopping'}><button onClick={addDetails}>Finish buying</button></Link>
          </div> 
        </Fragment>
      </CSSTransition>
     


    </div>
  );
}

