function Card({ titulo, valor, color }: any) {
  return (
    <div className="card">
      <span>{titulo}</span>
      <h2>{valor}</h2>

      <div className="progress">
        <div className="fill" style={{ background: color }}></div>
      </div>

      <small>+12% respecto a ayer</small>
    </div>
  );
}

export default function Dashboard() {
  return (
    <>
      <header>

        <div>
          <h1>Buenos días, Valentín 👋</h1>
          <span>Martes 7 de julio</span>
        </div>

        <div className="top">
          <div className="avatar">VH</div>
        </div>

      </header>

      <section className="cards">

        <Card titulo="Ventas Hoy" valor="$18,450" color="#43A047"/>

        <Card titulo="Utilidad" valor="$7,830" color="#8E24AA"/>

        <Card titulo="Clientes" valor="38" color="#039BE5"/>

        <Card titulo="Productos" valor="214" color="#FB8C00"/>

      </section>

      <section className="graph">
        Aquí construiremos la gráfica real...
      </section>

    </>
  );
}