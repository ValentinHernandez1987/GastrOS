import type { Producto } from "../data/productos";

interface Props {
  items: Producto[];
}

export default function Ticket({ items }: Props) {
  const total = items.reduce((suma, item) => suma + item.precio, 0);

  return (
    <div className="ticket">

      <h2>Ticket</h2>

      {items.length === 0 && (
        <p>No hay productos agregados.</p>
      )}

      {items.map((item, index) => (
        <div
          key={index}
          className="ticket-item"
        >
          <span>{item.nombre}</span>

          <strong>${item.precio}</strong>
        </div>
      ))}

      <hr />

      <h3>Total: ${total}</h3>

    </div>
  );
}