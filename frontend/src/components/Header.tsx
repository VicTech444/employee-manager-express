import { useLocation } from "react-router-dom";

export default function Header() {
    let routes = useLocation().pathname;

    return (
      <header>
        <h1 className="font-bold">Plataforma de Gestión de Empleados</h1>
      </header>
    );
  }