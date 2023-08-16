import '../styles/Card.css';

export const Card = ({dataN,dataE,dataP,handleClose,aux2}) => {
return (
    <div className='dataEnviadaContainer'>
      <h2>Info del usuario</h2>
      <p><b>Nombre:</b> {dataN}</p>
      <p><b>Libro:</b> {dataE}</p>
      <p><b>Autor:</b> {dataP}</p>
      <input className='button' type="button" value="CERRAR" onClick={handleClose}/>
    </div>
  )
}