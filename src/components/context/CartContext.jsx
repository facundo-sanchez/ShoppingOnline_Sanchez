import {React,createContext,useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [items, setItems] = useState([]);
   
    const addItem = (currentItem)=>{
       if(items.some(({item})=> item.id === currentItem.item.id)) {
           console.warn("element repeat");
           return
        };
      
       setItems([...items,currentItem]);
    }

    const removeItem = (currentItem)=>{
        const array = items.filter(({item})=> item.id !== currentItem.id);
        setItems([...array]);
    }

    const clearListItem = ()=>{
        setItems([]);
    }

  return (
    <CartContext.Provider
        value={{items,addItem,removeItem,clearListItem}}
    >
        {children}
    </CartContext.Provider>
  )
}
