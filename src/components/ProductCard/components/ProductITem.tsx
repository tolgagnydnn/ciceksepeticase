// React & Redux
import { useState, useEffect } from "react"
import { useAppDispatch } from "store/hooks"
import { addBasket, incrementBasketItem, decrementBasketItem } from "views/homepage/Main/mainSlice"

const ProductITem = (props: any) => {

    // Props
    const { product, basketProducts } = props

    const dispatch = useAppDispatch()

    // Local State
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
            <div className='product__images'>
                <img src={product.image} alt='productimage' />
            </div>
            <div className='product__productinformation'>
                <div className='productinformation-name-and-cargo'>
                    <div className='productinformation-name'>
                        <span> {product.name} </span>
                    </div>
                    {product.freeCargo &&
                        <div className='productinformation-cargo'>
                            <span> Ücretsiz Teslimat </span>
                        </div>
                    }
                </div>
                <div className='productinformation-price'>
                    <span> {`${product.price.toFixed(2)} TL`} </span>
                </div>
            </div>
            <div className='product__addbasket'>
                {
                    orderedBasketObject
                        ? <div className='addbasket-multibtn'>
                            <button onClick={() => decrementBasket(product)}> - </button>
                            <span> {orderedBasketObject?.orderCount} </span>
                            <button onClick={() => incrementBasket(product)}> + </button>
                        </div>
                        : <button className="addBasket-btn" onClick={() => dispatch(addBasket(product))}> Sepete Ekle </button>
                }
            </div>
        </div>
    )
}

export default ProductITem