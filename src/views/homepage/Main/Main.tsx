// React & Redux
import { useAppSelector } from '../../../store/hooks'

// Styles
import './style.scss'

// Images
import categoryicon from '../../../assets/images/categories.png'
import activecategoryicon from '../../../assets/images/activecategory.png'

// Components
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import Categories from '../components/Categories/Categories'
import ProductCard from '../components/ProductCard/ProductCard'
import DiscountCards from './components/DiscountCards'


const Main = () => {

  const {params, allCategories} = useAppSelector((state:any) => state.products)
  const categoryName = allCategories.filter((categoryname:any) => categoryname.id === params.id)

  return (
    <div className='main'>
      <div className='main__title'>
        <div className='title-text container'>
           <h1> Çiçek Sepeti </h1>
        </div>
      </div>
      <div className='main__breadcrumb container'>
        <BreadCrumb/>
      </div>
      <div className='main__categories container hidemobile'>
        <div className='categories-title'>
          <img src={categoryicon} alt='categories' />
          <span> Tüm Kategoriler </span>
        </div>
        <div className='main__categoriesbox'>
          <Categories/>
        </div>
      </div>
      <div className='main__products container'>
        <div className="products-title">
          <img src={activecategoryicon} alt='categories' />
          <span> {categoryName[0]?.title} </span>
        </div>
        <div className='products-allproducts'>
            <ProductCard/>
        </div>
        <div className='main__discountcards'>
            <DiscountCards/>
        </div>
      </div>
    </div>
  )
}

export default Main