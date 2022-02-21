import React, { Fragment ,useContext} from 'react';
import '../../styles/CssTransition.css'
import Styles from '../../styles/itemBuy.module.css';
import {addStockItem,subtractStockItem} from '../../hooks/userItem';
import { useState} from 'react';
import { Link } from "react-router-dom";
import {CSSTransition} from 'react-transition-group';
import { CartContext } from '../../context/CartContext';


//separar confirmar compra con item count
export default function ItemDetails({product}) {
  const [stock, setStock] = useState(1);
  const [productSelect, setProductSelect] = useState(false);

  const {addItem} = useContext(CartContext);

  return (
    <Fragment>
  
      <article className={Styles.itemCount__conteiner}>
        <ItemShopping product = {product}/>
      
        <div className={Styles.item__count}>
          {!productSelect &&(
            <CountItem 
              product={product}  
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
              product={product}
              stock = {stock}
            />
          </CSSTransition>

        </div>
      </article>

    </Fragment>
   )
}

const ItemShopping = ({product})=>{

  return (

      <div className={Styles.item__for__buy}>
            <div className={Styles.item__img}>
              <img src={product.img} alt="#" />
            </div>
            <div className={Styles.product}>
                <h3>${product.price}</h3>
                <p>Produc:{product.product}</p>
                <p>Category:{product.category}</p>
                <p>Description:{product.description}</p>
                <p>stock:{product.stock}</p>
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

const ConfirmItem = ({addItem,product,stock})=>{

  const addCart = ()=>{
    addItem({
      item:{
        id:product.id,
        img:product.img,
        category:product.category,
        product:product.product,
        description:product.description,
        price:product.price,
        selected:stock,
        total:product.price*stock
      }
    })
    //itemBuy({selectedItem,stock})
  };

  return (
    <Fragment>
    <div className={Styles.icon__buy}>
      <div className={Styles.selectedItem}>
        <h2>Purchase details</h2>
        <p>Price: {product.price} </p>
        <p>Selected:{stock}</p>
        <p>Produc:{product.produc}</p>
        <p>Description:{product.description}</p>
        <p>Category:{product.category}</p>
        <h3>Total ${product.price*stock}</h3>
      </div>

      <Link to={'/cart'}><button onClick={addCart}>Finish buying</button></Link>
    </div> 
  </Fragment>
  );
}