
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ContactPage } from './components/ContactPage/ContactPage';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:tipoProducto' element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='/contacto' element={<ContactPage/>}/>
            <Route path='*' element={<ItemListContainer/> }/>

            <Route/>
          </Routes>        
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
