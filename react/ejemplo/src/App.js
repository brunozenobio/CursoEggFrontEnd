
import './App.css';
import { Footer2 } from './components/public/Footer2';
import Main from './components/public/Main';
import { Navbar } from './components/public/Navbar'; // Se improta con llaves porque no son clases.

function App() {
  return (
    <div>

      <Navbar />
      <Main/>
      <Footer2 />



    </div>
  );
}

export default App; //Retorna porque index.js lo importa e inyecta el return en el div del html
