// React & Redux
import { useAppSelector } from 'store/hooks'

// Images
import lighticon from 'assets/images/lighticon.svg'

// Styles
import './style.scss'

// Componets
import ProgressBar from '../ProgressBar/ProgressBar'

const FreeCargo = () => {

    // Global Store
    const store = useAppSelector(state => state.products)

    const addPrice = 500 - store.basket.totalPrice
    const percent = store.basket.totalPrice * 100 / 500

    return (
        <div className='cargowarningbox'>
            {
                store.basket.totalPrice > 0 &&
                <div className='cargowarningbox__warning'>
                    {store.basket.totalPrice > 500
                        ? <div className='warning-text'>
                            <img src={lighticon} alt="lighticon" />
                            <p> Ürününleriniz için kargo bedava </p>
                        </div>
                        : <>
                            <div className='warning-text'>
                                <img src={lighticon} alt="lighticon" />
                                <p> <span> {`${addPrice.toFixed(2)} TL`} </span> ürün daha ekleyin kargo bedava </p>
                            </div>
                            <div className='warning-progress'>
                                <ProgressBar
                                    percent={percent}
                                />
                            </div>
                        </>
                    }
                </div>
            }
        </div>
    )

}

export default FreeCargo