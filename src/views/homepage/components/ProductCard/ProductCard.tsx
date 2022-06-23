// React & Redux
import { useAppSelector } from '../../../../store/hooks'

// Styles
import './style.scss'

const ProductCard = () => {
  const { allProducts }: any = useAppSelector(state => state.products)
  return (
    <>
      {
        allProducts?.map((product: any) => (
          <div className='product' key={product.id}>
            <div className='product-images'>
              <img src={product.image} alt='productimage' />
            </div>
            <div className='product-information'>
              <div className='product-name-and-cargo'>
                <div className='product-name'>
                  <span> {product.name} </span>
                </div>
                {product.freeCargo &&
                  <div className='product-cargo'>
                    <span> Ücretsiz Teslimat </span>
                  </div>
                }
              </div>
              <div className='product-price'>
                <span> {`${product.price} TL`} </span>
              </div>
            </div>
            <div className='product-addbasket'>
              <button> Sepete Ekle </button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ProductCard