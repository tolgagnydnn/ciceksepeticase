// React & Redux
import { useAppSelector } from 'store/hooks'

// Styles
import './style.scss'

// Components
import ProductITem from './components/ProductITem'

const ProductCard = () => {

  const { allProducts, basket: { products } }: any = useAppSelector(state => state.products)

  return (
    <>
      { allProducts.length > 0 
        ? allProducts?.map((product: any) => (
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

export default ProductCard