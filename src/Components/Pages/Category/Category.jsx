import { useEffect, useState } from "react";
import CategoryList from "../SharedHome/CategoryList/CategoryList";




const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div>
      <h2 className="text-3xl">Category List {categories.length} </h2>
      <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
        {
          categories.map(category => <CategoryList key={category.id} category={category} ></CategoryList>)
        }
      </div>
    </div>
  );
};

export default Category;