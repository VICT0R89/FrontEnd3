import React, { useState } from "react";
import { Card } from "./Card";
import "../styles/Form.css";

export const FormData = ({ titulo = "Datos" }) => {
  const [aux, setAux] = useState(false);
  const [aux2, setAux2] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    libro: "",
    autor: "",
  });
  const [dataEnviada, setdataEnviada] = useState({
    nombre: "",
    libro: "",
    autor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.length < 3 || /^\s/.test(nombre) || libro.length < 6) {
      setAux2(true);
      setAux(false)
    } else {
      setAux(true);
      setAux2(false);
      setdataEnviada(formData);
      setFormData({
        nombre: "",
        libro: "",
        autor: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = (e) => {
    setFormData({
      nombre: "",
      libro: "",
      autor: "",
    });
    setdataEnviada({
      nombre: "",
      libro: "",
      autor: "",
    });
    setAux(false);
  };
  let { nombre, libro, autor } = formData;
  let { nombre: dataN, libro: dataE, autor: dataP } = dataEnviada;
  return (
    <div className="contenedor">
      <h1>{titulo}</h1>
      <form className="inputsContainer" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          id="libro"
          name="libro"
          placeholder="Ingrese su libro favorito"
          value={libro}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          id="autor"
          name="autor"
          placeholder="Ingrese su autor favorito"
          value={autor}
          onChange={handleChange}
        />
        <input className="button" type="submit" value={"ENVIAR"} />
      </form>
      {aux2 ? (
        <div className="errorContainer">
          <p className="errorMessage">Por favor chequea que la información sea correcta.</p>
        </div>
      ) : (
        aux && (
          <Card
            dataN={dataN}
            dataE={dataE}
            dataP={dataP}
            handleClose={handleClose}
          />
        )
      )}
    </div>
  );
};
