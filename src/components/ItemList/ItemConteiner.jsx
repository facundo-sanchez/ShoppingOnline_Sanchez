import Item from './Item.jsx';
import Styles from '../styles/itemConteiner.module.css';
import { Fragment,useState,useEffect} from "react";
import { getProduct } from '../hooks/Products.jsx';

export default function ItemConteiner({countFavorites,setCountFavorites,countBuys,setCountBuys,selectBuy,setSelectBuy}) {
    const [products, setProducts] = useState([]);
    const [loadig, setLoadig] = useState(true);
    useEffect(() => {
        getProduct({setProducts,setLoadig});
        
    }, []);
    if(loadig){
        return <h1>Cargando...[proximamente la animacion]</h1>
    }
    return (
        <Fragment>
            <div className={Styles.conteiner__produc}>
                {products.map((product =>(
                    <Item key={product.id} product = {product} 
                    countFavorites={countFavorites} 
                    setCountFavorites={setCountFavorites} 
                    countBuys={countBuys}
                    setCountBuys={setCountBuys} 
                    setSelectBuy ={setSelectBuy}/>
                )))}
            </div>
        </Fragment>
    )
}
