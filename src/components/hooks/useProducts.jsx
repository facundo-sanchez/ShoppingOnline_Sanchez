import { useState,useEffect} from "react";
import { productsAPI } from '../helper/promises';


export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = async () => {
      try {
        const result = await productsAPI;
        setProducts(result);
      } catch (error) {
        console.log({ error });
      } finally {
        //
      }
    };
  
    return {
      products,
    };
}
