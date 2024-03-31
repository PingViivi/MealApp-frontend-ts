import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Category/Category.scss';

export interface ICategory {
  idCategory: string;
  strCategory: string;
  // Define other properties of the category if needed
}

const Category: React.FC<ICategory> = ({ strCategory }) => {
  const category = useParams().category
  
  return (
    <li className='Category'>
      <Link className={'link-item ' + (category === strCategory ? 'current' : '')} to={`/categories/${strCategory}`}>
        {strCategory}
      </Link>
    </li>
  );
  
};

export default Category;