import React from 'react';
import { Fragment ,useState,useEffect} from 'react';


//contadores de favoritos y compras
export const AdditemBuy = ({countBuys,setCountBuys})=>setCountBuys(countBuys+1);
export const AdditemFavorites = ({countFavorites, setCountFavorites})=>setCountFavorites(countFavorites+1)

//agregar stock
export const addStockItem = ({item,stock,setStock})=>{
    if(item.stock > stock){
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
export const selectProduct = ({id,price,produc,description,stock},{setSelectItem})=>{
  setSelectItem({id})
}

//comprar producto

export const itemBuy = ({item,stock})=>{
    if(stock >0){
        const itembuy = {
          id:item.id,
          price:item.price,
          produc:item.produc,
          description:item.description,
          stock,
        }
        console.log(itembuy);
      }
}

