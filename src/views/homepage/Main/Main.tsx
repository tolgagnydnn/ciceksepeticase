// Styles
import './style.scss'

// Images
import categoryicon from '../../../assets/images/categories.png'
import activecategoryicon from '../../../assets/images/activecategory.png'

// Components
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import Categories from '../components/Categories/Categories'

const Main = () => {
  return (
    <div className='main'>
      <div className='main__title'>
        <div className='title-text'>
           <h1> Çiçek Sepeti </h1>
        </div>
      </div>
      <div className='main__breadcrumb'>
        <BreadCrumb/>
      </div>
      <div className='main__categories'>
        <div className='categories-title'>
          <img src={categoryicon} alt='categories' />
          <span> Kategoriler </span>
        </div>
        <div className='main__categoriesbox'>
          <Categories/>
        </div>
      </div>
      <div className='main__products'>
        <div className="products-title">
          <img src={activecategoryicon} alt='categories' />
          <span> Kategoriler </span>
        </div>
        <div className='products-allproducts'>
            
        </div>
      </div>
    </div>
  )
}

export default Main