// React & Redux
import { useAppSelector } from '../../../store/hooks'

// Styles
import './style.scss'

// Images
import categoryicon from 'assets/images/categories.png'
import activecategoryicon from 'assets/images/activecategory.png'
import deliveryicon from 'assets/images/deliveryicon.png'
import gifticon from 'assets/images/gifticon.png'
import stationaryicon from 'assets/images/stationaryicon.png'

// Components
import BreadCrumb from 'components/BreadCrumb/BreadCrumb'
import Categories from 'components/Categories/Categories'
import ProductCard from 'components/ProductCard/ProductCard'
import DiscountCard from './components/DiscountCard'

const Main = () => {

  // GLobal State
  const { params, allCategories } = useAppSelector((state: any) => state.products)

  // Filter CategoryName
  const categoryName = allCategories.filter((categoryname: any) => categoryname.id === params.id)

  return (
    <div className='main'>
      <div className='main__title'>
        <div className='title-text container'>
          <h1> Çiçek Sepeti </h1>
        </div>
      </div>
      <div className='main__breadcrumb container'>
        <BreadCrumb />
      </div>
      <div className='main__categories container hidemobile'>
        <div className='categories-title'>
          <img src={categoryicon} alt='categories' />
          <span> Tüm Kategoriler </span>
        </div>
        <div className='main__categoriesbox'>
          <Categories />
        </div>
      </div>
      <div className='main__products container'>
        <div className="products-title">
          <img src={activecategoryicon} alt='categories' />
          <span> {categoryName[0]?.title} </span>
        </div>
        <div className='products-allproducts'>
          <ProductCard />
        </div>
        <div className='main__discountcards'>
          <DiscountCard
            image={deliveryicon}
            title={'75 TL Üzerine Teslimat Ücreti Bizden'}
            buttonTitle={'Detaylı Bilgi'}
            color={'#FFEAE8'}
          />
          <DiscountCard
            image={gifticon}
            title={'Hediye Kategorisi için Sepette %15 İndirim'}
            buttonTitle={'Hediye Ürünleri'}
            color={'#E8F1FF'}
          />
          <DiscountCard
            image={stationaryicon}
            title={'Kırtasiye Kategorisi için Sepette %15 İndirim'}
            buttonTitle={'Detaylı Bilgi'}
            color={'#E2F7E1'}
          />
        </div>
      </div>
    </div>
  )
}

export default Main