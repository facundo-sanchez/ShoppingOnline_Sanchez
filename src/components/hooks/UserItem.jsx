import React from 'react';
import { Fragment ,useState,useEffect} from 'react';


//contadores de favoritos y compras
export const AdditemBuy = ({countBuys,setCountBuys})=>setCountBuys(countBuys+1);
export const AdditemFavorites = ({countFavorites, setCountFavorites})=>setCountFavorites(countFavorites+1)

//agregar stock
export const addStockItem = ({selectBuy,stock,setStock})=>{
    if(selectBuy.stock > stock){
        setStock(stock+1);
     }
}
//eliminar stock
export const subtractStockItem = ({stock,setStock})=>{
    if(stock >0){
        setStock(stock-1);
      }
}

//agregar producto a buy
export const selectProduct = ({id,price,produc,description,stock},{setSelectBuy})=>{
    setSelectBuy({id,price,produc,description,stock})
}

//comprar producto
export const buyProduct = ({selectBuy,stock})=>{
    if(stock >0){
        const itemBuy = {
          id:selectBuy.id,
          price:selectBuy.price,
          produc:selectBuy.produc,
          description:selectBuy.description,
          stock,
        }
        console.log(itemBuy);
      }
}

