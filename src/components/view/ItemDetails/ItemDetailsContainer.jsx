import {Fragment } from 'react';
import { useState,useEffect} from 'react';

import ItemDetails from './ItemDetails';

import {useProducts} from '../../hooks/useProducts';
import { useParams } from 'react-router-dom';


export default function ItemDetailsContainer(){
  const [loadig, setLoadig] = useState(true);
  const { products } = useProducts({setLoadig});
  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
   
    }
  }, [products]);

  if(loadig){
    return <h1>cargando</h1>
  }
  
  return (
      <Fragment>
        {selectedItem && <ItemDetails selectedItem={selectedItem} />}
      </Fragment>
  );
};

