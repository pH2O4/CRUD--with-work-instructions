import './App.css';
import Login from "../componentes/login"
import {Routes, Route} from 'react-router'
import Cadastro from '../componentes/cadastro'


function App() {
  return (
    <div className="App">
   <Routes>
      <Route path="/Cadastro" element={<Cadastro/>} />
      <Route path="/" element={<Login/>} />
    </Routes>
    </div>

  ) 
}

export default App;
