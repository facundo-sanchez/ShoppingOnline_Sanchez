
import {products} from '../data/ProductAPI';
export const productsAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Message Error from Reject");
      resolve(products);
    }, 2000);
  });