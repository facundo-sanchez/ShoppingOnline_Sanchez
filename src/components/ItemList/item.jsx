import { Fragment } from "react";


export default function item({id,price,produc,description,setItems}) {
  const selectItems =()=>{
    setItems({id,price,produc,description})
    console.log({id,price,produc,description})
  };



  return (        
    <Fragment>
      <article>
        <img src="#" alt="#" />
        <h3>${price}</h3>
        <p>Produc:{produc}</p>
        <p>Description:{description}</p>
        <button>Buy</button>
        <button onClick={selectItems}>Favorites</button>
      </article>
    </Fragment>


    );

      
}
