import Navbar from "../components/NavBar";
import Header from "../components/Header";
import { useHandleLogin } from "../react-query-calls/handleLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface jwtResponse {
  email: string;
  exp: number;
  iat: number;
  role: number;
  userName: string;
}

export default function Settings() {
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

    if (role != 1 && role != 2) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold">Here is your information</h1>
      </div>
    </div>
  );
}
