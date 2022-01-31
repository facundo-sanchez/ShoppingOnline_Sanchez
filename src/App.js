import './components/styles/App.css';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import ItemConteiner from './components/ItemList/ItemConteiner';
import Main from './components/view/Home';
import { Fragment ,useState,useEffect} from 'react';
import ItemBuy from './components/ItemList/ItemBuy';

export default function App() {
  
  const [countFavorites, setCountFavorites] = useState(0);
  const [countBuys,setCountBuys] = useState(0);
  const [selectFavorites, setSelectFavorites] = useState(null);
  const [selectBuy, setSelectBuy] = useState(null);
 

    return (
    <Fragment>
      <Header 
        countFavorites = {countFavorites} 
        countBuys = {countBuys}
      />
   
      <ItemBuy 
        selectBuy = {selectBuy}
      />

      <ItemConteiner 
       countFavorites = {countFavorites}
       setCountFavorites={setCountFavorites} 
       countBuys={countBuys} 
       setCountBuys={setCountBuys}
       selectBuy={selectBuy} 
       setSelectBuy ={setSelectBuy}
      />
      {/* <Main/> */}
      <Footer/>
    </Fragment>
  );
}
