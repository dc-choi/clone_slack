import { Routes, Route, BrowserRouter } from "react-router-dom";
import ConfirmEmail from "./ConfirmEmail";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SetupWorkspace from "./SetupWorkspace";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ConfirmEmail" element={<ConfirmEmail />} />
        <Route path="/SetupWorkspace" element={<SetupWorkspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
