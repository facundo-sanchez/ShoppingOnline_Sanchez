import {useState,useEffect} from 'react'

import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where
  } from "firebase/firestore";

import { useParams } from "react-router-dom";

export const useGetProductsFirebase = ({setLoadig}) =>{
    const [products, setProducts] = useState(null);
    const {category} = useParams();

    useEffect(()=>{
        if(category){
            getProductsFilter();
        }else{
            getProducts();
        }
       
    },[category ? category : undefined])

    const getProducts = ()=>{
        const db = getFirestore();

        const itemsCollection = query(
            collection(db, "products"),
        );
      
        getDocs(itemsCollection).then((snapshot) => {
                setProducts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                );
        }).catch((e)=>{
            console.log(e);
        }).finally(()=>{
            setLoadig(false)
        })
    }
    const getProductsFilter = ()=>{
        const db = getFirestore();

        const itemsCollection = query(
            collection(db, "products"),
            where('category','==',category)
        );
      
        getDocs(itemsCollection).then((snapshot) => {
            setProducts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              }))
            );
            
        }).catch((e)=>{
            console.log(e);
        }).finally(()=>{
            setLoadig(false)
        })

    }

    return {products,};
}
export const useGetProductsFirebaseById = ({setLoadig})=>{
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        getProductById();
    },[])

    const getProductById = ()=>{
        const db = getFirestore();

        const itemsCollection = doc(db, "products", id);
        getDoc(itemsCollection).then((snapshot) => {
            setProduct({
              id: snapshot.id,
              ...snapshot.data()
            });
          }).catch((e)=>{
            console.log(e)
          }).finally(()=>{
            setLoadig(false);
          });
    }
    
    return {product,}
}