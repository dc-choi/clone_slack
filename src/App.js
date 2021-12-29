import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ConfirmEmail from "./ConfirmEmail";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LoginGoogle from "./LoginGoogle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirmemail" element={<ConfirmEmail />} />
        <Route path="/LoginGoogle" element={<LoginGoogle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
