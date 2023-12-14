import './WeekExpense.css'
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
export default function WeekExpense() {
    return <section className="week__expense">
        <h3 className='week__expenseHeading'>Weekly Savings</h3>
        <h3 className='week__expAmount'>$ 50</h3>
        <div className="week__dash">
            <div className="week__dashItem">
                <FaCircleArrowDown color='red' size={30} />
                <span className='we'>$ 60</span>
            </div>
            <div className="week__dashItem">
                <FaCircleArrowUp size={30} color='green'/>
                <span>$ 70</span>
            </div>
        </div>
    </section>
}