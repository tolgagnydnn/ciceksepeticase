// Styles
import './style.scss'

// İmages & Icon
import mainLogo from '../../../../../assets/images/logo.png'
import searchicon from '../../../../../assets/images/searchbutton.png'
import basket from '../../../../../assets/images/basket.png'

// Components
import FreeCargo from '../../../components/FreeCargo/FreeCargo'

const DesktopHeader = (props: any) => {

    // Global State
    const { store, searchProducts } = props

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
                    {store.basket.count > 0 &&
                        <div className='basket-count'>
                            <span>  {store.basket.count}  </span>
                        </div>
                    }
                </div>
                <div className='basket-cargobox'>
                    <FreeCargo />
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader