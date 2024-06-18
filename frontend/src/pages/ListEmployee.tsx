import Navbar from "../components/NavBar";
import Header from "../components/Header";
import EmployeeList from "../components/EmployeeList";
import { useHandleLogin } from "../react-query-calls/handleLogin";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { getAllEmployees } from "../react-query-calls/getAllEmployees";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface jwtResponse {
  email: string;
  exp: number;
  iat: number;
  role: number;
  userName: string;
}

export default function ListEmployee() {
  let navigate = useNavigate();
  let { data, cookie } = useHandleLogin();

  if (data.error || !cookie) {
    navigate("/");
    return;
  }
  useEffect(() => {
    let decoded: jwtResponse;
    try {
      decoded = jwtDecode(cookie);
    } catch (error) {
      console.error("Error decoding JWT:", error);
      navigate("/");
      return;
    }

    const { role } = decoded;

    if (role === 1) {
      navigate("/settings");
      return;
    } else if (role !== 2) {
      navigate("/");
      return;
    }
  }, []);
  let { queryEmployees } = getAllEmployees();

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
