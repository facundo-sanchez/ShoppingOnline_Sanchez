import { Fragment} from "react";
import Styles from '../../styles/itemList.module.css';
import { Link } from "react-router-dom";

export default function Item({product}) {

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
      </article>
    </Fragment>
    );

      
}
