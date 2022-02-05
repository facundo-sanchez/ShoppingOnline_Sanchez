import {Fragment } from 'react';
import { useState,useEffect} from 'react/cjs/react.development';

import ItemDetails from './ItemDetails';

import {useProducts} from '../hooks/useProducts';
import { useParams } from 'react-router-dom';


export default function ItemDetailsContainer(){
  const { products } = useProducts();
  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id == id);
      setSelectedItem(selectedProduct);
   
    }
  }, [products]);


  return (
      <Fragment>
        {selectedItem && <ItemDetails selectedItem={selectedItem} />}
      </Fragment>
  );
};

