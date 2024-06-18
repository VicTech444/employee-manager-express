import Navbar from "../components/NavBar";
import Header from "../components/Header";
import EmployeeList from "../components/EmployeeList";
import { useHandleLogin } from "../react-query-calls/handleLogin";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { getAllEmployees } from "../react-query-calls/getAllEmployees";

export default function ListEmployee() {
  let navigate = useNavigate();
  let { data, cookie } = useHandleLogin();

  if (data.error || !cookie) {
    navigate("/");
  }

  let {queryEmployees} = getAllEmployees();
  
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold">
          Only administrators can register employees
        </h1>
        {data.isLoading ? (
          <FaSpinner className="h-6 w-6 animate-spin" />
        ) : (
          <EmployeeList employees={queryEmployees.data} />
        )}
      </div>
    </div>
  );
}
