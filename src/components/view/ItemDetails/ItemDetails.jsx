import React, { Fragment ,useContext} from 'react';
import '../../styles/CssTransition.css'
import Styles from '../../styles/itemBuy.module.css';
import {addStockItem,subtractStockItem,itemBuy} from '../../hooks/userItem';
import { useState} from 'react';
import { Link } from "react-router-dom";
import {CSSTransition} from 'react-transition-group';
import { CartContext } from '../../context/CartContext';


//separar confirmar compra con item count
export default function ItemDetails({selectedItem}) {
  const [stock, setStock] = useState(1);
  const [productSelect, setProductSelect] = useState(false);

  const {addItem} = useContext(CartContext);

  return (
    <Fragment>
  
      <article className={Styles.itemCount__conteiner}>
        <ItemShopping selectedItem = {selectedItem}/>
      
        <div className={Styles.item__count}>
          {!productSelect &&(
            <CountItem 
              selectedItem={selectedItem}  
              stock = {stock} 
              setStock = {setStock} 
              productSelect = {productSelect} 
              setProductSelect ={setProductSelect}
              addItem={addItem}
            />
          )}

          <CSSTransition
            in = {productSelect}
            timeout={300}
            classNames={'navbar'} //reutilizando clases
            unmountOnExit
          > 
            <ConfirmItem
              addItem = {addItem}
              selectedItem={selectedItem}
              stock = {stock}
            />
          </CSSTransition>

        </div>
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

const CountItem = ({selectedItem,stock,setStock,productSelect,setProductSelect,addItem})=>{

  const addStock = (e)=>{
    e.preventDefault();
    addStockItem({selectedItem,stock,setStock})
  };

  const subtractStock = (e)=>subtractStockItem({stock,setStock});

  const addOn = (e) =>  {
    e.preventDefault();
    setProductSelect(true)
  };


  return (
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
  );
}

const ConfirmItem = ({addItem,selectedItem,stock})=>{

  const addCart = ()=>{
    addItem({
      item:{
        id:selectedItem.id,
        category:selectedItem.category,
        product:selectedItem.produc,
        description:selectedItem.description,
        price:selectedItem.price,
        selected:stock,
        total:selectedItem.price*stock
      }
    })
    //itemBuy({selectedItem,stock})
  };

  return (
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

      <Link to={'/cart'}><button onClick={addCart}>Finish buying</button></Link>
    </div> 
  </Fragment>
  );
}