// React & Redux
import { useAppSelector } from 'store/hooks'
import { memo } from 'react'

// Styles
import './style.scss'

// Components
import ProductITem from './components/ProductITem'

// Models
import { ProductInterface } from 'models/ProductModel'


const ProductCard = () => {

  const { allProducts, basket: { products } } = useAppSelector(state => state.products)

  return (
    <>
      { allProducts.length > 0 
        ? allProducts?.map((product: ProductInterface) => (
          <ProductITem 
            key={product.id}
            basketProducts={products}
            product={product}
          />
        ))
        : 
        <div className='noneProduct'>
            <p> Aradığınız Kriterlerde Ürün Bulunamadı. </p>
        </div>
      }
    </>
  )
}

export default memo(ProductCard);