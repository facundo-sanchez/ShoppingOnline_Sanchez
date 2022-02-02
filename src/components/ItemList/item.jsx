import { Fragment } from "react";
import Styles from '../styles/itemList.module.css';
import {AdditemBuy, AdditemFavorites,selectProduct} from '../hooks/UserItem';

export default function Item({product,countFavorites,setCountFavorites,countBuys,setCountBuys,setSelectItem}) {
  const addFavorites = ()=>{
    AdditemFavorites({countFavorites,setCountFavorites})
  }
  const addDetails = ()=> {
    AdditemBuy({countBuys,setCountBuys});
    selectProduct({...product},{setSelectItem});
  }
  
  return (        
    <Fragment>
      <article>
        <a href='/'>
          <div className={Styles.item__img}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png" alt="#" />
          </div>
        </a>
          <div className={Styles.item__information}>
              <h3>${product.price}</h3>
              <div className={Styles.item__buttons}>
                <button onClick={addFavorites}>Favorites</button>
                <button onClick={addDetails}>Details</button>
              </div>
          </div>

      </article>
    </Fragment>
    );

      
}
