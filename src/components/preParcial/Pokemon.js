import React, { useState } from 'react';
import '../styles/App.css';

export const Pokemon = ({titulo = 'Datos'}) => {

  const [aux, setAux] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    pokemon: '',
  });
  const [dataEnviada, setdataEnviada] = useState({
    nombre: '',
    edad: '',
    pokemon: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAux(true)
    setdataEnviada(formData);
    setFormData({
      nombre: '',
      edad: '',
      pokemon: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = e =>{
    setFormData({
      nombre: '',
      edad: '',
      pokemon: '',
    });
    setdataEnviada({
      nombre: '',
      edad: '',
      pokemon: '',
    });
    setAux(false)
  }
  let {nombre, edad, pokemon} = formData
  let {nombre: dataN, edad: dataE, pokemon: dataP} = dataEnviada
  return (
    <div className='contenedor'>
      <h1>{titulo}</h1>
      <form className='inputsContainer' onSubmit={handleSubmit}>
        <input
          type="text"
          id='nombre'
          name='nombre'
          placeholder='Ingrese su nombre'
          value={nombre}
          onChange={handleChange}
        />
        <input
          type="number"
          id='edad'
          name='edad'
          placeholder='Ingrese su edad'
          value={edad}
          onChange={handleChange}
        />
        <input
          type="text"
          id='pokemon'
          name='pokemon'
          placeholder='Ingrese su pokemon favorito'
          value={pokemon}
          onChange={handleChange}
        />
        <input className='button' type="submit" value={"ENVIAR"} />
      </form>
      {aux &&  (
        <div className='dataEnviadaContainer'>
          <h2>Info del usuario</h2>
          <p><b>Nombre:</b> {dataN}, <b>edad:</b> {dataE}</p>
          <p><b>Pokemon:</b> {dataP}</p>
          <input className='button' type="button" value={"CERRAR"} onClick={handleClose}/>
        </div>
      )}
    </div>
  );
}
