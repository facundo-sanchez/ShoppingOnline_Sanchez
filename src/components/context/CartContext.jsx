import {React,createContext,useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [items, setItems] = useState([]);
    const [countBuys,setCountBuys] = useState(0);
    const [total,setTotal] = useState(0);
    const [countFavorites, setCountFavorites] = useState(0);
    const [selectFavorites, setSelectFavorites] = useState([]);



    let subtotal = 0

    const addTotal = (price)=>{
        subtotal = (subtotal+price)
        setTotal(subtotal.toFixed(3))
    }
    const subtractTotal =(price)=>{
        console.log(total)
        subtotal = (subtotal-price)

        //setTotal(subtotal.toFixed(3))
    }

    const addFavorites = (currentItem)=>{
        console.log(currentItem);
        if(selectFavorites.some(({item})=> item.id === currentItem.item.id)) {
            console.warn("element repeat")
            return
        };
        setCountFavorites(countFavorites+1);
        setSelectFavorites([...selectFavorites,currentItem]);
    }

    const deleteFavorites = (currentItem)=>{
        const array = selectFavorites.filter(({item})=>item.id!== currentItem.id);
        setCountFavorites(countFavorites-1);
        setSelectFavorites([...array]);
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
        value={{items,setItems,total,addTotal,subtractTotal,selectFavorites,countBuys,countFavorites,addFavorites,deleteFavorites,addItem,removeItem,clearListItem}}
    >
        {children}
    </CartContext.Provider>
  )
}
