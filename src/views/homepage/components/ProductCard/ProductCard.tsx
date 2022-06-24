// React & Redux
import { useAppSelector } from '../../../../store/hooks'
import ProductITem from './components/ProductITem'

// Styles
import './style.scss'

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