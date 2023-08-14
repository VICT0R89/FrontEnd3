import '../styles/App.css';
function Producto({element, handlerElement, titulo = 'Producto'}) {
  return (
    <div className='contenedor'>
      <h1>{titulo}</h1>
      <ul className='lista'>
        {element.map((e, idx)=>{
          return <li key={idx}>{e}</li>
        })}
      </ul>
      <button onClick={handlerElement} className='boton'>agregar linea</button>
    </div>
  );
}

export default Producto;