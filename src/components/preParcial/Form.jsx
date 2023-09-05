import { useState } from 'react';

export const Form = ({onAddPaciente}) =>{
  const [data, setData] = useState({nombre:"",apellido:""})

  const handlerSubmit = e =>{
    e.preventDefault()
    if(data.nombre && data.apellido){
      onAddPaciente(data)
      setData({nombre:"",apellido:""})
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (

    <form onSubmit={handlerSubmit}>
      <input
          type="text"
          id='nombre'
          name='nombre'
          placeholder='Ingrese su nombre'
          value={data.nombre}
          onChange={handleChange}
        />
      <input
          type="text"
          id='apellido'
          name='apellido'
          placeholder='Ingrese su apellido'
          value={data.apellido}
          onChange={handleChange}
        />
      <input className='button' type="submit" value={"ENVIAR"} />
    </form>

  )

}