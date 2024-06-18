import Navbar from "../components/NavBar";
import Header from "../components/Header";
import { useHandlePermissions } from "../hooks/usePermissions";
import UserInformation from "../components/UserInformation";
import { useHandlePersonalInfo } from "../react-query-calls/getPersonalInfo";
import { FaSpinner } from "react-icons/fa";

export default function Settings() {
  let { cookie } = useHandlePermissions();

  let userInformation = useHandlePersonalInfo(cookie as string);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container flex flex-col gap-y-4">
        {userInformation?.data.isFetching ? (
          <FaSpinner className="h-6 w-6 animate-spin" />
        ) : (
          <UserInformation {...userInformation?.data.data.message[0]} />
        )}
      </div>
    </div>
  );
}
