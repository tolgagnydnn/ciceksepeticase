// React & Redux
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getAllProducts } from 'views/homepage/Main/mainSlice'

// Styles
import './style.scss'

// Hooks
import useMediaQuery from 'hooks/useMediaQuery'

// Models
import { CategoriesInterface } from 'models/ProductModel';

const Categories = (props:any) => {

  // Props
  const { setOpenStatus }= props

  const dispatch = useAppDispatch()

  // Hooks
  const isMobile = useMediaQuery('(max-width: 767.98px)')

  // Global State
  const { allCategories, categoryLoading } = useAppSelector(state => state.products)

  // Local State
  const [activeCategory, setActiveCategory] = useState<CategoriesInterface>();

  useEffect(() => {
    if (categoryLoading === false) {
      setActiveCategory(allCategories[0])
    }
  }, [allCategories, categoryLoading])

  const handleActiveCategory = (category: CategoriesInterface) => {
    setActiveCategory(category)
    dispatch(getAllProducts({
      id: category.id,
      q: ''
    }))
    if (isMobile) {
      setOpenStatus(false)
    }
  }

  return (
    <div className='categories'>
      {
        allCategories?.map((category: CategoriesInterface) => (
          <div key={category.id} className='categories__title'>
            <button
              className={activeCategory?.id === category.id ? "active" : ""}
              onClick={() => handleActiveCategory(category)}
            >
              <span> {category?.title} </span>
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default Categories