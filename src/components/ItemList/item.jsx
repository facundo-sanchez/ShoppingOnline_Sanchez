import { Fragment } from "react";


export default function Item({id,price,produc,description,favorites,setFavorites,buys,setBuys}) {

  const countFavorites = ()=>setFavorites(favorites+1);
  
  const countShopping = ()=>setBuys(buys+1);
  
  return (        
    <Fragment>
      <article>
        <img src="#" alt="#" />
        <h3>${price}</h3>
        <p>Produc:{produc}</p>
        <p>Description:{description}</p>
        <button onClick={countFavorites}>Favorites</button>
        <button onClick={countShopping}>Buy</button>
      </article>
    </Fragment>
    );

      
}
