import Navbar from "../components/NavBar";
import Header from "../components/Header";
import EmployeeForm from "../components/EmployeeForm";
import Notification from "../components/Notification";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHandleLogin } from "../react-query-calls/handleLogin";

interface notifyProps {
  type: string;
  message: string;
}

export default function AddEmployee() {
  const [notification, setNotification] = useState<notifyProps | null>(null);
  let navigate = useNavigate();
  let { data } = useHandleLogin();

  if (data.error) {
    navigate("/");
  }
  
  return (
    <div>
      <Navbar />
      <Header />
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <div className="container">
        <EmployeeForm />
      </div>
    </div>
  );
}
