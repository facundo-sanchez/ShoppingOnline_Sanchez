import './components/styles/App.css';
import Header from './components/layaout/header/Header';
import Footer from './components/layaout/footer/Footer';
import ItemList from './components/ItemList/ItemList';
import Main from './components/view/Home';
import { Fragment } from 'react';


export default function App() {

  return (
    <Fragment>
      <Header/>
      <ItemList/>
      {/* <Main/> */}
      <Footer/>
    </Fragment>
  );
}
