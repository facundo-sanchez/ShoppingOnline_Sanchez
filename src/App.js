import './components/styles/App.css';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import ItemConteiner from './components/ItemList/ItemConteiner';
import ItemDetailsContainer from './components/ItemList/ItemDetailsContainer';
import Main from './components/view/Home';
import { Fragment ,useState,useEffect} from 'react';

export default function App() {
  
  const [countFavorites, setCountFavorites] = useState(0);
  const [countBuys,setCountBuys] = useState(0);
  const [selectFavorites, setSelectFavorites] = useState(null);
  const [selectItem, setSelectItem] = useState(null);
 

    return (
    <Fragment>
      <Header 
        countFavorites = {countFavorites} 
        countBuys = {countBuys}
      />
      {selectItem &&(
        <ItemDetailsContainer 
        selectItem = {selectItem}
        />  
      )}
    

      <ItemConteiner 
       countFavorites = {countFavorites}
       setCountFavorites={setCountFavorites} 
       countBuys={countBuys} 
       setCountBuys={setCountBuys}
       setSelectItem ={setSelectItem}
      />
      {/* <Main/> */}
      <Footer/>
    </Fragment>
  );
}
