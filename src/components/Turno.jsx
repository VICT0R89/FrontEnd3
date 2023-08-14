export const Turno=({ paciente })=> {
  return (
    <div>
      <h2>Turnos</h2>
      {paciente.map((p, index) => (
        <div key={index}>
          <h3>{p.nombre} {p.apellido}</h3>
        </div>
      ))}
    </div>
  );
}