import { Link } from "react-router-dom";

export default function ManagerNav() {
  return (
      <ul>
        <li>
          <Link to="/">Logout</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/add-employee">Add Employee</Link>
        </li>
      </ul>
  );
}
