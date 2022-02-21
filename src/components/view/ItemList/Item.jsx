import { Fragment ,useContext} from "react";
import Styles from '../../styles/itemList.module.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function Item({product}) {

  const {addFavorites} = useContext(CartContext)

  const addItemFavorites = ()=>{
    addFavorites({
      item:{
      id:product.id,
      category:product.category,
      product:product.produc,
      description:product.description,
      price:product.price,
    }});
  }
  
  return (        
    <Fragment>
      <article>
        <Link to={`/item/${product.id}`}>
          <div className={Styles.item__img}>
            <img src={product.img} alt="#" />
          </div>
          
          <div className={Styles.item__information}>
              <h3>${product.price}</h3>
              <p>{product.category}</p>
          </div>
        </Link>
        <div className={Styles.item__buttons}>
          <button onClick={addItemFavorites}>Favorites</button>
        </div>
      </article>
    </Fragment>
    );

      
}
