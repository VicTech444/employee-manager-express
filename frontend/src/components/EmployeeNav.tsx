import { Link } from "react-router-dom";

export default function EmployeeNav() {
  return (
    <ul>
      <li>
        <Link to="/">Logout</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );
}
