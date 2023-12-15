import {
  categoriesSelectOptions,
  getCategoryIcon,
} from "../../helpers/CategoriesSelect";
import "./TransCategoryCard.css";
export default function TransCategoryCard({ category, expense }) {
  const renderIcon = () => {
    const Icon = getCategoryIcon(category);
    return <Icon size={30} />;
  };
  const categoryName = categoriesSelectOptions.expense[category];
  return (
    <li className="category__card">
      <span className="category__head">
        {renderIcon()}
        <span>{categoryName}</span>
      </span>
      <span className="category__expense">$ {expense}</span>
    </li>
  );
}
