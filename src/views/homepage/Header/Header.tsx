// Styles
import './style.scss'

// İmages & Icon
import mainLogo from '../../../assets/images/logo.png'
import searchicon from '../../../assets/images/searchbutton.png'
import basket from '../../../assets/images/basket.png'
import lighticon from '../../../assets/images/lighticon.svg'


const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={mainLogo} alt="logo" />
      </div>
      <div className='header__search'>
        <form className="searcform" id="searchform">
          <img src={searchicon} alt="search" />
          <input type="text" name="arama" className="search-input" placeholder="Ürün Ara" />
          <button className="search-btn">
            Ara
          </button>
        </form>
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

export default Header