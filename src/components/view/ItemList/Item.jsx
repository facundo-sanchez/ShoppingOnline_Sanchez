import { Fragment } from "react";
import Styles from '../../styles/itemList.module.css';
import {AdditemBuy, AdditemFavorites} from '../../hooks/userItem';
import { Link } from "react-router-dom";

export default function Item({product,countFavorites,setCountFavorites,countBuys,setCountBuys}) {
  const addFavorites = ()=>{
    AdditemFavorites({countFavorites,setCountFavorites})
  }
  const addShopping = ()=>{
    AdditemBuy({countBuys,setCountBuys});
  }
  
  return (        
    <Fragment>
      <article>
        <Link to={`/item/${product.id}`}>
          <div className={Styles.item__img}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png" alt="#" />
          </div>
          
          <div className={Styles.item__information}>
              <h3>${product.price}</h3>
              <p>{product.category}</p>
          </div>
        </Link>
        <div className={Styles.item__buttons}>
          <button onClick={addFavorites}>Favorites</button>
          <button onClick={addShopping}>Shop</button>
        </div>
      </article>
    </Fragment>
    );

      
}
