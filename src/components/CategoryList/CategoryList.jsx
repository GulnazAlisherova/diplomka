import { NavLink } from "react-router-dom";
import "../CategoryList/CategoryList.css";

export default function CategoryList() {
  const categories = [
    { id: 1, name: "Juices", slug: "juices" },
    { id: 2, name: "Bottles", slug: "bottles" },
    { id: 3, name: "Store", slug: "store" },
  ];

  const output = categories.map((category) => (
    <li>
      <NavLink to={`/categories/${category.slug}`}>{category.name}</NavLink>
    </li>
  ));

  return (
    <div className={CategoryList}>
      <h3>Categories</h3>
      <ul>{output}</ul>
    </div>
  );
}
