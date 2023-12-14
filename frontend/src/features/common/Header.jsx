import { Link } from 'react-router-dom';
import './Header.css';
export default function Header() {
    return <header>
        <h1>EXTracker</h1>
        <ul className='header__links'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
            <li><Link to={"/transactions"}>Transactions</Link></li>
        </ul>
    </header>
}