import './components/styles/App.css';
import Routes from './components/routes/Routes.';
import { CartProvider } from './components/context/CartContext';


export default function App() {
  
  return (
    <CartProvider>
    <Routes/>
    </CartProvider>
  );
}
