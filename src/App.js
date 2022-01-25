import './components/styles/App.css';
import Header from './components/layaout/header/Header';
import Footer from './components/layaout/footer/Footer';
import ItemList from './components/ItemList/ItemList';
import Main from './components/view/Home';
import { Fragment ,useState} from 'react';
import ItemCount from './components/ItemList/ItemCount';


export default function App() {
  const [favorites, setFavorites] = useState(0);
  const [buys,setBuys] = useState(0);
  const item = {id:1,price:130,produc:'item 1',description:'descripcion 1', stock:'4'}
  
    return (
    <Fragment>
      <Header favorites = {favorites} buys = {buys}/>
      <ItemCount Item = {item}/>
      {/* <ItemList favorites = {favorites} setFavorites={setFavorites} buys={buys} setBuys={setBuys}/> */}
      {/* <Main/> */}
      <Footer/>
    </Fragment>
  );
}
