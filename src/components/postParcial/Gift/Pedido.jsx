import { useState, useEffect } from "react";

export const Pedido = () => {
  const [pedido, setPeido] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      console.log("El componente fue montado")
      setPeido(true);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("El componente se ha actualizado")
  });

  const handleOrder = () => {
    setPeido(!pedido)
  };

  return (
    <div>
      <h1>Su pedido:</h1>
      {pedido ? 
      <div>
        <p>- Pizzas</p>
        <button onClick={handleOrder}>Cancelar Pedido</button>
      </div>
      :
      <div>
        <button onClick={handleOrder}>Agregar Pedido</button>
      </div>
      }
      
    </div>
  );
}
