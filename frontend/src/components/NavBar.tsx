import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/employees">Empleados</Link></li>
          <li><Link to="/add-employee">Agregar Empleado</Link></li>
        </ul>
      </nav>
    );
}