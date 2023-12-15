import "./LandingPage.css";
import logo from "../../../assets/money.svg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="main__landing">
      <section className="landing__left">
        <div className="landing">
          <div className="landing__banner">
            <img src={logo} alt="Landing page logo" width={200} height={200} />
            <h1>ExTracker</h1>
          </div>
          <p>Track your expenses or income from anywhere</p>
          <div className="landing__btns">
            <Link className="landing__auth" to={"/auth"}>
              Add expense
            </Link>
          </div>
        </div>
      </section>
      <section className="landing__right"></section>
    </main>
  );
}
