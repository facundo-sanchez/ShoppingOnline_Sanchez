import React from 'react';
import { BrowserRouter,Route,Routes as Switch} from 'react-router-dom';
import ItemDetailsContainer from '../ItemList/ItemDetailsContainer';
import ItemListConteiner from '../ItemList/ItemListConteiner';
import Header from '../layout/header/Header';
import { useState } from 'react';


export default function Routes() {

    
    const [countBuys,setCountBuys] = useState(0);
    const [countFavorites, setCountFavorites] = useState(0);
    //const [selectFavorites, setSelectFavorites] = useState(null);

 
  return (

        <BrowserRouter>
            <Header 
                countFavorites={countFavorites} 
                countBuys={countBuys}/>
            <Switch>

                <Route path='/' element = {
                    <ItemListConteiner        
                    countFavorites = {countFavorites}
                    setCountFavorites={setCountFavorites} 
                    countBuys={countBuys} 
                    setCountBuys={setCountBuys}
                    />
                }/>
                <Route path='/offers' element = {<p></p>}/>
                <Route path='/contact' element = {<p></p>}/>
                <Route path='/help' element = {<p></p>}/>
                    {/* Categories */}
                <Route path='/computers' element = {<p></p>}/>
                <Route path='/cell-phones' element = {<p></p>}/>
                <Route path='/tablets' element = {<p></p>}/>
                <Route path='/tvs' element = {<p></p>}/>
                <Route path='/favorites' element = {<p></p>}/>
                <Route path='/shopping' element = {<p></p>}/>
                <Route path='item/:id' element={
                    <ItemDetailsContainer/>}
                /> 


            </Switch>
        </BrowserRouter>

  );
}
