import Navbar from "../components/NavBar";
import Header from "../components/Header";
import EmployeeForm from "../components/EmployeeForm";
import Notification from "../components/Notification";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHandleLogin } from "../react-query-calls";
import { NotifyContext } from "../context/NotificationContext";

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
      <NotifyContext.Provider key={notification?.type} value={{notification, setNotification}}>
        {
          notification && <Notification message={notification.message} type={notification.type}/>
        }
        <div className="container">
        <EmployeeForm />
        </div>
      </NotifyContext.Provider>
    </div>
  );
}
