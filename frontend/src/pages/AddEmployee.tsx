import Navbar from "../components/NavBar";
import Header from "../components/Header";
import EmployeeForm from "../components/EmployeeForm";
import Notification from "../components/Notification";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHandleLogin } from "../react-query-calls";
import { NotifyContext } from "../context/NotificationContext";
import { jwtDecode } from "jwt-decode";

interface notifyProps {
  type: string;
  message: string;
}

interface jwtResponse {
  email: string;
  exp: number;
  iat: number;
  role: number;
  userName: string;
}
export default function AddEmployee() {
  const [notification, setNotification] = useState<notifyProps | null>(null);
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

  return (
    <div>
      <Navbar />
      <Header />
      <NotifyContext.Provider
        key={notification?.type}
        value={{ notification, setNotification }}
      >
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
          />
        )}
        <div className="container">
          <EmployeeForm />
        </div>
      </NotifyContext.Provider>
    </div>
  );
}
