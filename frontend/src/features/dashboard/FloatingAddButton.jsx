import { FaPlus } from "react-icons/fa";
import './FloatingAddButton.css'
export default function FloatingAddButton() {
    return <span title="Add new transaction" className="floating__add"><FaPlus size={35} /></span>
}