import { ProductAPI } from '../data/ProductAPI';

export const getProduct = async ({setProducts,setLoadig}) => {
    setTimeout( async ()=>{
        try{
            const response = await ProductAPI;
            setProducts(response);
        }catch(e){
            console.log(e)
        }finally{
            setLoadig(false);
        }
    },3000);

}