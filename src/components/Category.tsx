import React from 'react';
import { Link } from 'react-router-dom';

export interface ICategory {
  idCategory: string;
  strCategory: string;
  current: boolean;
  // Define other properties of the category if needed
}

const Category: React.FC<ICategory> = ({ strCategory }) => {
  return (
    <li>
      <Link className='category-item' to={`/categories/${strCategory}`}>
        {strCategory}
      </Link>
    </li>
  );
};

export default Category;