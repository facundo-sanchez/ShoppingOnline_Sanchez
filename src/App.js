import './components/styles/App.css';
import Header from './components/layaout/header/header';
import Footer from './components/layaout/footer/footer';
import ItemList from './components/ItemList/itemList';
import Main from './components/view/home';
import { Fragment } from 'react';

export default function App() {

  return (
    <Fragment>
      <Header/>
      <ItemList/>
      <Main/>
   
      <Footer/>
    </Fragment>
  );
}
