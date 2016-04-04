import React from 'react';
import Category from './Category.jsx';

export default ({categories}) => {
  return (
    <div className="categories">
      {categories.map(category =>
        <Category className="category" key={category.id} category={category} />
      )}
    </div>
  );
}