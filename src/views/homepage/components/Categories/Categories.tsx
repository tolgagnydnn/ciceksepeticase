// Styles
import './style.scss'

// Categories Data
import allcategories from './allCategories'

const Categories = () => {

  return (
    <div className='categories'>
      {
        allcategories?.map((category: any) => (
          <div key={category.id} className='categories__title'>
            <a href='!#' key={category.id}> {category?.title} </a>
          </div>
        ))
      }
    </div>
  )
}

export default Categories