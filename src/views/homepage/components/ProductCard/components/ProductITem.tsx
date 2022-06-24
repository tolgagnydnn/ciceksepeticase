// React & Redux
import { useState, useEffect } from "react"
import { useAppDispatch } from "../../../../../store/hooks"
import { addBasket, incrementBasketItem, decrementBasketItem } from "../../../Main/mainSlice"

const ProductITem = (props: any) => {

    const { product, basketProducts } = props
    const dispatch = useAppDispatch()

    const [orderedBasketObject, setOrderedBasketObject] = useState<any>()

    useEffect(() => {
        const object = basketProducts.find((productEl: any) => productEl.id === product.id)
        setOrderedBasketObject(object)
    }, [basketProducts, product])

    const incrementBasket = (product: any) => {
        dispatch(incrementBasketItem(product))
    }

    const decrementBasket = (product: any) => {
        dispatch(decrementBasketItem(product))
    }

    return (
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
                    <span> {`${product.price.toFixed(2)} TL`} </span>
                </div>
            </div>
            <div className='product-addbasket'>
                {
                    orderedBasketObject
                        ? <div className='multibasket'>
                            <button onClick={() => decrementBasket(product)}> - </button>
                            <span> {orderedBasketObject?.orderCount} </span>
                            <button onClick={() => incrementBasket(product)}> + </button>
                        </div>
                        : <button onClick={() => dispatch(addBasket(product))}> Sepete Ekle </button>
                }
            </div>
        </div>
    )
}

export default ProductITem