
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ContactPage } from './components/ContactPage/ContactPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* <Routes>
          <Route path='/' element={ItemListContainer}/>
          <Route path='/contacto' element={ContactPage}/>
          <Route path='*' element={ItemListContainer }/> */}
          {/*<Route/> */}
        {/* </Routes> */}
        <ItemListContainer/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
