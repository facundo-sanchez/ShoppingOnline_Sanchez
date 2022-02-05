import './components/styles/App.css';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

import Main from './components/view/Home';
import { Fragment ,useState,useEffect} from 'react';
import Routes from './components/routes/Routes.';

export default function App() {
  



    return (

    <Fragment>

      <Routes
      //  countFavorites = {countFavorites}
      //  setCountFavorites={setCountFavorites} 
      //  countBuys={countBuys} 
      //  setCountBuys={setCountBuys}
      //  selectItem = {selectItem}
      //  setSelectItem ={setSelectItem}
       />
      {/* <Main/> */}

    </Fragment>
  );
}
/*
 {selectItem &&(
        <ItemDetailsContainer 
        selectItem = {selectItem}
        />  
      )}
    

      <ItemListConteiner 
       countFavorites = {countFavorites}
       setCountFavorites={setCountFavorites} 
       countBuys={countBuys} 
       setCountBuys={setCountBuys}
       setSelectItem ={setSelectItem}
      />
    */