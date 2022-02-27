import {React,createContext,useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [items, setItems] = useState([]);
    const [countBuys,setCountBuys] = useState(0);


    const finishedBuy = ()=>{
        setItems([])
        setCountBuys(0);
    }
    const calculateTotal = ()=>{
        let total = 0
        items.map(({item})=>total += item.total)
        return total;
    }

    const addItem = (currentItem)=>{
       if(items.some(({item})=> item.id === currentItem.item.id)) {
           console.warn("element repeat");
           return
        };
       setCountBuys(countBuys+1);
        
       setItems([...items,currentItem,]);

    }

    const removeItem = (currentItem)=>{
        const array = items.filter(({item})=> item.id !== currentItem.id);
        setCountBuys(countBuys-1);
        setItems([...array]);
    }

    const clearListItem = ()=>{
        setItems([]);
    }


  return (
    <CartContext.Provider
        value={{items,setItems,calculateTotal,finishedBuy,countBuys,addItem,removeItem,clearListItem}}
    >
        {children}
    </CartContext.Provider>
  )
}
