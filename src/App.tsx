import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Ventas from "./pages/Ventas";

export default function App() {
  const [pagina, setPagina] = useState("panel");

  return (
    <div className="app">
      <Sidebar
        active={pagina}
        onChange={setPagina}
      />

      <main>
        <h1 style={{ color: "red" }}>{pagina}</h1>

{pagina === "panel" && <Dashboard />}
{pagina === "ventas" && <Ventas />}
      </main>
    </div>
  );
}