import React from 'react';
import Category from './Category';
import { useParams } from 'react-router-dom';

interface CategoryType {
  idCategory: string;
  strCategory: string;
  // Define other properties of the category
}

interface Props {
  categories: {
    categories?: CategoryType[];
  };
  current: (categories: CategoryType[]) => any;
}

const Categories: React.FC<Props> = (props) => {
  const { categories } = props;

  return (
    <section>
      <div className='container flex'>
        {categories.categories?.map((category) => (
          <Category strCategory={category.strCategory} key={category.idCategory} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
