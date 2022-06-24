// React & Redux
import { useState } from 'react'

// Styles
import './style.scss'

// Categories Data
//import allcategories from './allCategories';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getAllProducts } from '../../Main/mainSlice';

const Categories = () => {

  const dispatch = useAppDispatch()

  // Global State
  const {allCategories} = useAppSelector(state => state.products)

  // Local State
  const [activeCategory, setActiveCategory] = useState<any>(allCategories[0]);

  const handleActiveCategory = (category: any) => {
    setActiveCategory(category)
    dispatch(getAllProducts({
      id:category.id,
      q: ''
    }))
  }

  return (
    <div className='categories'>
      {
        allCategories?.map((category: any) => (
          <div key={category.id} className='categories__title'>
            <a
              href='!#'
              className={activeCategory?.id === category.id ? "active" : ""}
              onClick={(): any => handleActiveCategory(category)}
            >
              {category?.title}
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default Categories