import { Fragment,useState} from "react";
import { useParams } from "react-router-dom";
import { useProducts } from '../../hooks/useProducts.jsx';
import ItemList from './ItemList.jsx';

export default function ItemListConteiner({countFavorites,setCountFavorites,countBuys,setCountBuys}) {

    const [loadig, setLoadig] = useState(true);
    const {products} = useProducts({setLoadig});
    
    const {id} = useParams();

    const filterCategory = id ? products.filter((products)=> products.category === id) : null;


    if(loadig){
        return <h1>cargando</h1>
    }
    
    return (
        <Fragment>
            {id &&(       
                <ItemList products={filterCategory} 
                    countFavorites={countFavorites} 
                    setCountFavorites={setCountFavorites} 
                    countBuys = {countBuys} 
                    setCountBuys = {setCountBuys} 
                />     
            )}
            {!id &&(
                <ItemList products={products} 
                countFavorites={countFavorites} 
                setCountFavorites={setCountFavorites} 
                countBuys = {countBuys} 
                setCountBuys = {setCountBuys} 
                />
            )}

        </Fragment>
    )
}
