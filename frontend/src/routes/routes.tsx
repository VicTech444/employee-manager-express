import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import AddEmployee from "../pages/AddEmployee";
import ListEmployee from "../pages/ListEmployee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/employees",
    element: <ListEmployee />,
  },
  {
    path: "/add-employee",
    element: <AddEmployee />,
  },
]);
