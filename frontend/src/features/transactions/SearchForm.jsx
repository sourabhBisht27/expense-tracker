import DateFilter from "./DateFilter";
import "./SearchForm.css";
export default function SearchForm({
  loading,
  searchProps,
  onChangeSearchFormField,
}) {
  const { onClickSearch, searchForm } = searchProps;
  return (
    <form className="search__form">
      <input
        value={searchForm.filter}
        onChange={onChangeSearchFormField}
        disabled={loading}
        type="search"
        name="search"
        id="searchTransaction"
        placeholder="Search by name or description"
      />
      <div className="search__btn">
        <DateFilter
          startDate={searchForm.startDate}
          endDate={searchForm.endDate}
          onChangeSearchFormField={onChangeSearchFormField}
        />
        <button onClick={onClickSearch} title="Search" className="btn">
          Search
        </button>
      </div>
    </form>
  );
}
