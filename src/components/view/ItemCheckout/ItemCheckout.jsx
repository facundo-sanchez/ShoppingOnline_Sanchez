import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useFormCheckout } from '../../hooks/useProductFirebase';
import Spinner from '../loading/Spinner'
import Styles from '../../styles/itemCheckout.module.css'
import { Link } from 'react-router-dom';
//item buy
export default function ItemCheckout() {
  const { items } = useContext(CartContext)
  const { calculateTotal } = useContext(CartContext)

  const [buyer, setBuyer] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const total = (calculateTotal()).toFixed(3);

  const validateString = (event) => {
    console.log(orderId)
    const newValues = {
      ...buyer,
      [event.target.name]: event.target.value,
    }
    setBuyer(newValues)
  }

  const useFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      buyer, items: [...items]
    }

    setOrderId(await useFormCheckout(order));
    setLoading(false);
  }
  if (loading) {
    return <Spinner />
  }
  return (

    <>
      {orderId && (
        <div className={Styles.order__container}>
          <div className={Styles.order__header}>
            <h2>Thanks for your purchase!</h2>
          </div>
          <div className={Styles.order__id}>
            <p>Order ID: <span>{orderId}</span></p>
          </div>
          <div className={Styles.order__button}>
            <Link to={'/home'}>Home</Link>
          </div>
        </div>
      )}
      {!orderId && (
        <div className={Styles.container__product}>
          <div className={Styles.container__form}>
            <form>
              <div className={Styles.form__group}>
                <label>Name</label>
                <input type="text" name="name" id="" placeholder='Name' onChange={validateString} />
              </div>
              <div className={Styles.form__group}>
                <label>Email</label>
                <input type="text" name="email" id="" placeholder='Email' onChange={validateString} />
              </div>
              <div className={Styles.form__group}>
                <label>Phone</label>
                <input type="text" name="phone" id="" placeholder='Phone' onChange={validateString} />
              </div>
              <div className={Styles.form__group}>
                <button onClick={useFormSubmit}>Buy</button>
              </div>
            </form>
          </div>
          <div className={Styles.container__item}>
            <div className={Styles.item__header}>
              <h2>Products</h2>
            </div>
            {items && (
              <>
                <div className={Styles.items__list__container}>
                  {items.map(({ item }) => (
                    <Items key={item.id}
                      item={item}
                    />
                  ))}
                </div>
                <div className={Styles.item__list__total}>
                  <p>Total: ${total}</p>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </>
  )
}
const Items = ({ item }) => {
  return (
    <>
      <div className={Styles.item__list}>
        <div className={Styles.item__list__img}>
          <img src={item.img} alt="" />
        </div>
        <div className={Styles.item__list__product}>
          <p>{item.product}</p>
        </div>
        <div className={Styles.item__list__selected}>
          x{item.selected}
        </div>
        <div>
          {item.total}
        </div>

      </div>
    </>)
}



