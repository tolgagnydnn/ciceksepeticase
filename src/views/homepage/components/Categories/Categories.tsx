// React & Redux
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getAllProducts } from '../../Main/mainSlice';

// Styles
import './style.scss'

// Hooks
import useMediaQuery from '../../../../hooks/useMediaQuery';

const Categories = (props:any | boolean) => {

  const {setOpenStatus} = props

  const dispatch = useAppDispatch()

  const isMobile = useMediaQuery('(max-width: 767.98px)')

  // Global State
  const {allCategories, categoryLoading} = useAppSelector(state => state.products)

  // Local State
  const [activeCategory, setActiveCategory] = useState<any>();

  useEffect(() => {
    if(categoryLoading === false) {
      setActiveCategory(allCategories[0])
    }
  }, [allCategories, categoryLoading])

  const handleActiveCategory = (category: any) => {
    setActiveCategory(category)
    dispatch(getAllProducts({
      id:category.id,
      q: ''
    }))
    if(isMobile) {
      setOpenStatus(false) 
    }
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