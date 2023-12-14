import { Route, Routes } from "react-router-dom";
import AuthPage from "./features/auth";
import LandingPage from "./features/landing";
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from "./features/dashboard";
import TransactionsPage from "./features/transactions";
export default function App() {
  return (
    <Routes>
       <Route
        path="/"
        element={<LandingPage />}
      />
      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />
      <Route
        path="/auth"
        element={<AuthPage />}
      />
      <Route
        path="/transactions"
        element={<TransactionsPage />}
      />
    </Routes>
  );
}
