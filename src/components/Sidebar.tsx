import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  Bot,
  Wallet,
} from "lucide-react";

type Props = {
  active?: string;
  onChange?: (pagina: string) => void;
};

export default function Sidebar({
  active = "panel",
  onChange,
}: Props) {
  return (
    <aside className="sidebar">
      <h2>GastrOS</h2>

      <p>Business Operating System</p>

      <nav>

        <button
          className={active === "panel" ? "active" : ""}
          onClick={() => onChange?.("panel")}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button
          className={active === "ventas" ? "active" : ""}
          onClick={() => {
  console.log("VENTAS");
  onChange?.("ventas");
}}
        >
          <Wallet size={18} />
          Ventas
        </button>

        <button>
          <Package size={18} />
          Inventario
        </button>

        <button>
          <ShoppingCart size={18} />
          Compras
        </button>

        <button>
          <Users size={18} />
          Clientes
        </button>

        <button>
          <BarChart3 size={18} />
          Reportes
        </button>

        <button>
          <Bot size={18} />
          IA
        </button>

        <button>
          <Settings size={18} />
          Configuración
        </button>

      </nav>
    </aside>
  );
}