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
    },2000);
}

export const getItemDetailsId = async ({selectItem,setItem,setLoadig})=>{
    setTimeout(async()=>{
        try{
            const response = await ProductAPI;
            const item = response.find(item => item.id === selectItem.id);
            setItem(item);
        }catch(e){
            console.log(e)
        }finally{
            setLoadig(false);
        }
       
    },2000)
}