import './App.css';
import Login from "../componentes/login"
import {Routes, Route} from 'react-router'
import Cadastro from '../componentes/cadastro'
import WorkInstrutions from '../componentes/WorkInstrutions'

function App() {
  return (
    <div className="App">
   <Routes>
      <Route path="/Cadastro" element={<Cadastro/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/WorkStation" element={<WorkInstrutions/>} />
    </Routes>
    </div>

  ) 
}

export default App;
