import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/money.svg";
export default function Header() {
  return (
    <header>
      <div className="header__banner">
        <img src={logo} alt="Company logo" width={60} height={60} />
        <h1>EXTracker</h1>
      </div>
      <ul className="header__links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/transactions"}>Transactions</Link>
        </li>
      </ul>
    </header>
  );
}
