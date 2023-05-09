import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import ProductList from "../components/ProductList/ProductList";
import NotFound from "./NotFound";

export default function Category() {
  // деструктизацтия
  const { params } = useMatch("/category/:slug");
  const { categories } = useContext(AppContext);
  // простой метод
  // const match = useMatch("/category/:slug");
  // match.params.slug;

  // найти категорию где путь категории совпадает с путем в браузере
  const category = categories.find(
    (category) => params.slug === category.slug
    /*
    function(category) {
      if (params.slug === category.slug) {
        return true;
      }
      else {
        return false;
      }
    }
    */
  );

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="Category">
      <h1>{category ? category.name : "Loading..."}</h1>
      <ProductList category={category} />
    </div>
  );
}
