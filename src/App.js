import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';



function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
