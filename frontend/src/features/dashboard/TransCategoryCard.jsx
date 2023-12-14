import './TransCategoryCard.css'
import { FaHamburger } from "react-icons/fa";
export default function TransCategoryCard() {
    return <li className="category__card">
        <span className="category__head">
            <FaHamburger size={30} color='#444444'/>
            <span>Food</span>
        </span>
        <span>$50</span>
    </li>
}