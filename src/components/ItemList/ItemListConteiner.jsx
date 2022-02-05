import { Fragment,useState,useEffect} from "react";
import { useProducts } from '../hooks/useProducts.jsx';
import ItemList from './ItemList.jsx';

export default function ItemListConteiner({countFavorites,setCountFavorites,countBuys,setCountBuys}) {

    const [loadig, setLoadig] = useState(true);

    const {products} = useProducts({setLoadig});



    return (
        <Fragment>
            <ItemList products={products} 
            countFavorites={countFavorites} 
            setCountFavorites={setCountFavorites} 
            countBuys = {countBuys} 
            setCountBuys = {setCountBuys} 
            />
        </Fragment>
    )
}
