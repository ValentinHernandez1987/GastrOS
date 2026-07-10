import type { Producto } from "../data/productos";

interface Props {
  producto: Producto;
  onAgregar: (producto: Producto) => void;
}

export default function ProductCard({
  producto,
  onAgregar,
}: Props) {
  return (
    <div className="product-card">

      <div>

        <h3>{producto.nombre}</h3>

        <small>{producto.categoria}</small>

      </div>

      <div>

        <strong>${producto.precio}</strong>

        <button onClick={() => onAgregar(producto)}>
          +
        </button>

      </div>

    </div>
  );
}