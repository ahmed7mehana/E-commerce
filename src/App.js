import Appnavbar from "./components/Appnavbar"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <Appnavbar />
<Routes>
<Route path="/" element={<Products/>} />
<Route path="/Cart" element={<Cart/>} />
</Routes>
    </div>
  );
}

export default App;