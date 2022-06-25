// Styles
import './style.scss'

// İmages & Icon
import mainLogo from 'assets/images/logo.png'
import searchicon from 'assets/images/searchbutton.png'
import basketIcon from 'assets/images/basket.png'

// Components
import FreeCargo from 'components/FreeCargo/FreeCargo'

//Type
interface DesktopHeaderInterface {
    count: number
    searchProducts: (val: string) => void
}

const DesktopHeader = (props: DesktopHeaderInterface) => {

    // Global State
    const { count, searchProducts } = props

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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchProducts(e.target.value)}
                    />
                    <button className="search-btn">
                        Ara
                    </button>
                </div>
            </div>
            <div className='header__basket'>
                <div className='basket-content'>
                    <img src={basketIcon} alt="basket" />
                    <span className='basket-title'> Sepetim </span>
                    {count > 0 &&
                        <div className='basket-count'>
                            <span>  {count}  </span>
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