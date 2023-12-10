import { Route, Routes } from "react-router-dom";
import AuthPage from "./features/auth";
import LandingPage from "./features/landing";
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage />}
      />
      <Route
        path="/auth"
        element={<AuthPage />}
      />
    </Routes>
  );
}
