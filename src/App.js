
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import Home from './pages/Home'
import Sales from './pages/Sales'
import Clientes from './pages/Clientes';
import Ventas from './pages/Ventas'
import Reportes from './pages/Reportes'




function App() {
  return (
    <Router>
      <Navbar/>
      <div className='contenedor'>
       <Slidebar/>
       <div className='content'>
       <Routes>
       <Route path="/" exact element={<Home/>} />
       <Route path="/Sales" exact element={<Sales/>} />
       <Route path="/clientes" exact element={<Clientes/>} />
       <Route path='/ventas' exact element={<Ventas/>}/>
       <Route path='/Reportes' exact element={<Reportes/>}/>
       </Routes>  
                                   
        
       </div>
       

      </div>
      
     
    </Router>
  );
}

export default App;
