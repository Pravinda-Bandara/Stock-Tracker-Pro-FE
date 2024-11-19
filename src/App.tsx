import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";

function App() {
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
