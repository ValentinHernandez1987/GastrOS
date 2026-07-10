import { useState } from "react";
import { productos, type Producto } from "../data/productos";
import ProductCard from "../components/ProductCard";
import Ticket from "../components/Ticket";

export default function Ventas() {

  const [ticket, setTicket] = useState<Producto[]>([]);

  function agregarProducto(producto: Producto) {
    setTicket([...ticket, producto]);
  }

  return (
    <>

      <header>

        <div>

          <h1>Ventas</h1>

          <span>Punto de venta</span>

        </div>

      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >

        <div>

          {productos.map((producto) => (

            <ProductCard
              key={producto.id}
              producto={producto}
              onAgregar={agregarProducto}
            />

          ))}

        </div>

        <Ticket items={ticket} />

      </div>

    </>
  );
}