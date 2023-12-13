import { useEffect, useState } from "react";
import CategoryList from "../SharedHome/CategoryList/CategoryList";



const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => setCategory(data))
  }, [])

  return (
    <div>
      <h2 className="text-3xl">Category List {category.length} </h2>
      <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
        {
          category.map(categ => <CategoryList
            key={categ.id}
            categ={categ}
          ></CategoryList>)
        }
      </div>
    </div>
  );
};

export default Category;