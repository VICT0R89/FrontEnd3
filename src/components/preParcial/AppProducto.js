import '../styles/App.css';
import Producto from './Producto';
import { useState } from 'react';
function AppProducto() {
  const [count, setCount] = useState(0)
  const [element, setElement] = useState([])
  const handlerElement = () => {
    setCount(prevCount => prevCount + 1);
    setElement(prevElement => [...prevElement, `Agregando elemento ${count} a la lista`]);
  };
  return (
    <div>
      <Producto element={element} handlerElement={handlerElement} titulo={'otro titulo'}/>
    </div>
  );
}

export default AppProducto;