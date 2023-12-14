import './DateFilter.css'
export default function DateFilter() {
    return <div className="trans__dateFilters">
        <input type="date" id="startDate" name="startDate" />
        <span>to</span>
        <input type="date" id="startDate" name="endDate" />
    </div>
}