import React from 'react';
import { Fragment ,useState,useEffect} from 'react';


//contadores de favoritos y compras
export const AdditemBuy = ({countBuys,setCountBuys})=>setCountBuys(countBuys+1);
export const AdditemFavorites = ({countFavorites, setCountFavorites})=>setCountFavorites(countFavorites+1)

//agregar stock
export const addStockItem = ({selectedItem,stock,setStock})=>{
    if(selectedItem.stock > stock){
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

export const itemBuy = ({selectedItem,stock})=>{
    if(stock >0){
        const itembuy = {
          id:selectedItem.id,
          price:selectedItem.price,
          produc:selectedItem.produc,
          description:selectedItem.description,
          stock,
        }
        console.log(itembuy);
      }
}

