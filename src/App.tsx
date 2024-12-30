import { Outlet, useNavigate } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";
import { useEffect } from "react";
import { setupInterceptors } from "./Services/AxiosInterceptor";


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    setupInterceptors(navigate);
}, [navigate]);
  return (
    <>
      <div className="min-h-screen bg-bgGray9">
        <UserProvider>
          <Navbar />
          <Outlet />
          <ToastContainer />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
