import {Turno} from './Turno'
import {Form} from './Form'
import { useState } from 'react';

const AppPaciente = () => {
  const [paciente, setPaciente]= useState([]);
  const addPaciente = p => {
    setPaciente([...paciente, p])
  }

  return (
    <div>
      <h1>Registro de pacientes</h1>
      <Form onAddPaciente={addPaciente}/>
      <Turno paciente={paciente}/>
    </div>
  )
}
export default AppPaciente