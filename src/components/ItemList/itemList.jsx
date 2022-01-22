import Item from './Item.jsx';
import Styles from '../styles/itemList.module.css';
import { Fragment} from "react";

export default function ItemList({favorites,setFavorites,buys,setBuys}) {
    const item = [
        {id:1,price:130,produc:'item 2',description:'descripcion 2'},
        {id:2,price:260,produc:'item 3',description:'descripcion 3'},
        {id:3,price:340,produc:'item 1',description:'descripcion 1'},
        {id:4,price:280,produc:'item 4',description:'descripcion 4'},
        {id:5,price:120,produc:'item 5',description:'descripcion 5'},
        {id:6,price:1450,produc:'item 6',description:'descripcion 6'},
        {id:7,price:2550,produc:'item 7',description:'descripcion 7'},
        {id:8,price:1210,produc:'item 8',description:'descripcion 8'},
        {id:9,price:5610,produc:'item 9',description:'descripcion 9'},
        {id:10,price:4350,produc:'item 10',description:'descripcion 10'},
        {id:11,price:2450,produc:'item 11',description:'descripcion 11'},
        {id:12,price:7150,produc:'item 12',description:'descripcion 12'},
        {id:13,price:5150,produc:'item 13',description:'descripcion 13'},
        {id:14,price:3450,produc:'item 14',description:'descripcion 14'},
        {id:15,price:4350,produc:'item 15',description:'descripcion 15'},
        {id:16,price:5450,produc:'item 16',description:'descripcion 16'}]

    return (
        <Fragment>
            <div className={Styles.conteiner__produc}>
                {item.map((it)=>(<Item key={it.id} {...it} favorites={favorites} setFavorites={setFavorites} buys={buys} setBuys={setBuys}/>))}
            </div>
        </Fragment>
    )
}