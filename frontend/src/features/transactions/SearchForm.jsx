import DateFilter from "./DateFilter";
import "./SearchForm.css";
export default function SearchForm({ loading }) {
  return (
    <section className="search__form">
      <input
        disabled={loading}
        type="search"
        name="search"
        id="searchTransaction"
        placeholder="Search by name or description"
      />
      <DateFilter />
    </section>
  );
}
