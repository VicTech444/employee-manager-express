import Navbar from "../components/NavBar";
import Header from "../components/Header";
import { useHandlePermissions } from "../hooks/usePermissions";
import UserInformation from "../components/UserInformation";

export default function Settings() {
  useHandlePermissions()
  
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container flex flex-col gap-y-4">
        <UserInformation />
      </div>
    </div>
  );
}
