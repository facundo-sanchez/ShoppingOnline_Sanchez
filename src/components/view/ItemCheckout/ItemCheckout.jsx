import React, { Fragment,useContext,useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useFormCheckout } from '../../hooks/useProductFirebase';

//item buy
export default function ItemCheckout() {
  const {items} = useContext(CartContext)
  const [buyer, setBuyer] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const validateString = (event)=>{
    console.log(orderId)
    const newValues = {
        ...buyer,
        [event.target.name]:event.target.value,
    }
    setBuyer(newValues)
  }

  const useFormSubmit =async (e)=>{

    e.preventDefault();
    const order = {
      buyer,items:[...items]
    }

    setOrderId(await useFormCheckout(order));

  }
  return (

    <Fragment>
      <div>
          <form>
            <div>
              <input type="text" name="name" id="" placeholder='Name' onChange={validateString}/>
            </div>
            <div>
              <input type="text" name="email" id="" placeholder='Email' onChange={validateString}/>
            </div>
            <div>
              <input type="text" name="phone" id="" placeholder='Phone' onChange={validateString}/>
            </div>
            <div>
              <button onClick={useFormSubmit}>Buy</button> 
            </div>
              
            
          </form>
      </div>
    </Fragment>

   )
}



