import React from "react";

function CategoryFilter({categories, selectedCategory, getCategory}) {

  console.log("CATSSSS", getCategory)
  const displayCategory = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;


    return  <button key={category} className={className} onClick={ () => getCategory(category)}>
      {category}
    </button> 
    
  })


//update this component to display button elements for each Categoery(Map)
  // pass down data from parent
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategory}
    </div>
  );
}

export default CategoryFilter;
