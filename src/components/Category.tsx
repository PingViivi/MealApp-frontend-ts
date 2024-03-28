import React from 'react';
import { Link } from 'react-router-dom';

export interface ICategory {
  strCategory: string;
  // Define other properties of the category if needed
}

const Category: React.FC<ICategory> = ({ strCategory }) => {
  return (
    <Link className='category-item' to={`/categories/${strCategory}`}>
      {strCategory}
    </Link>
  );
};

export default Category;