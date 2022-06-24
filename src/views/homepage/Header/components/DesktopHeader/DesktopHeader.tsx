// React & Redux
import { getAllProducts } from '../../../Main/mainSlice'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'

// Styles
import './style.scss'

// İmages & Icon
import mainLogo from '../../../../../assets/images/logo.png'
import searchicon from '../../../../../assets/images/searchbutton.png'
import basket from '../../../../../assets/images/basket.png'
import lighticon from '../../../../../assets/images/lighticon.svg'

const DesktopHeader = () => {
    const dispatch = useAppDispatch()
    const store  = useAppSelector(state => state.products)

    const searchProducts = (value:string) => {
        if (value.length > 2) {
            dispatch(getAllProducts({ ...store.params, q: value }))
        } else {
            dispatch(getAllProducts({ ...store.params, q: '' }))
        }
    }

    return (
        <div className='header container'>
            <div className='header__logo'>
                <img src={mainLogo} alt="logo" />
            </div>
            <div className='header__search'>
                <div className="search-form" id="searchform">
                    <img src={searchicon} alt="search" />
                    <input 
                        type="text" 
                        name="arama" 
                        className="search-input" 
                        placeholder="Ürün Ara"
                        onChange={(e) => searchProducts(e.target.value)}
                     />
                    <button className="search-btn">
                        Ara
                    </button>
                </div>
            </div>
            <div className='header__basket'>
                <div className='basket-content'>
                    <img src={basket} alt="basket" />
                    <span className='basket-title'> Sepetim </span>
                    <div className='basket-count'>
                        <span> 2 </span>
                    </div>
                </div>
                <div className='basket-warning'>
                    <div className='warning-text'>
                        <img src={lighticon} alt="lighticon" />
                        <p> <span>50 TL</span> ürün daha ekleyin kargo bedava </p>
                    </div>
                    <div className='warning-progress'>
                        progressbar
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DesktopHeader