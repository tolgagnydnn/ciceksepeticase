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
      {
        allProducts?.map((product: any) => (
          <ProductITem 
            key={product.id}
            basketProducts={products}
            product={product}
          />
        ))
      }
    </>
  )
}

export default ProductCard