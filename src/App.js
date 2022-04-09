import Registro from './components/Registro.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
