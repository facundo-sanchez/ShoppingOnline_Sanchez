import React, { Fragment } from 'react';
import { useState,useEffect} from 'react/cjs/react.development';

import { CSSTransition} from 'react-transition-group';
import '../styles/CssTransition.css'

import ItemDetails from './ItemDetails';
import { getItemDetailsId } from '../hooks/Products';

//item buy
export default function ItemDetailsContainer({selectItem}) {
 
  const [details, setDetails] = useState(false);
  const [item, setItem] = useState(null);
  const [loadig, setLoadig] = useState(true);

  useEffect(() => {
    if(selectItem){
        setDetails(true);
        getItemDetailsId({selectItem,setItem,setLoadig});
    }
 
  }, [selectItem]);
  if(loadig){
      return <h2>loading</h2>
  }

  return (
    <Fragment>
   
        <CSSTransition
        in = {details}
        timeout={300}
        classNames={'active'}
        unmountOnExit
        >
            <ItemDetails item={item}/>
        </CSSTransition>
     
    </Fragment>
   )
}
