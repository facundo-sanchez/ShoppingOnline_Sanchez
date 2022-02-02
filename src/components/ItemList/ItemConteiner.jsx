import { Fragment,useState,useEffect} from "react";
import { getProduct } from '../hooks/Products.jsx';
import ItemList from './ItemList.jsx';

export default function ItemConteiner({countFavorites,setCountFavorites,countBuys,setCountBuys,setSelectItem}) {
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
            <ItemList products={products} 
            countFavorites={countFavorites} 
            setCountFavorites={setCountFavorites} 
            countBuys = {countBuys} 
            setCountBuys = {setCountBuys} 
            setSelectItem = {setSelectItem}/>
        </Fragment>
    )
}
