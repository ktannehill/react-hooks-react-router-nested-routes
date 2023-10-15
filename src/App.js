import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import users from "./data";

function App() {
  return (
    <>
      <header>
          <NavBar />
      </header>
      <Outlet context={users} />
    </>
  );
};

export default App;
