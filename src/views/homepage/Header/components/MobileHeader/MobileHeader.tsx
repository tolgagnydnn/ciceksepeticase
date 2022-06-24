// React
import { useState } from 'react'

// Styles
import './style.scss'

// Images
import mainLogo from 'assets/images/logo.png'
import basket from 'assets/images/mobilebasket.png'
import menuicon from 'assets/images/categories.png'

// Components
import MobileNavbar from './MobileNavbar'
import FreeCargo from '../../../components/FreeCargo/FreeCargo'

const MobileHeader = (props: any) => {

  const { store, searchProducts } = props
  const [openStatus, setOpenStatus] = useState(false)

  return (
    <div className='mobilenavbar'>
      <div className='mobilenavbar__freecargo'>
        <FreeCargo />
      </div>
      <div className='mobilenavbar__header'>
        <div className='header-menuicon'>
          <img onClick={() => setOpenStatus(true)} src={menuicon} alt="menuicon" />
        </div>
        <div className='header-mobilelogo'>
          <img src={mainLogo} alt="mainLogo" />
        </div>
        <div className='header-basket'>
          <img src={basket} alt="basket" />
          {store.basket.count > 0 &&
            <div className='basket-count'>
              <span>  {store.basket.count}  </span>
            </div>
          }
        </div>
      </div>
      <div className='mobilenavbar__search'>
        <div className="search-form" id="searchform">
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
      <div className='mobilenavbar__navbar'>
        {openStatus &&
          <div className='navbar-backdrop' onClick={() => setOpenStatus(false)}></div>
        }
        <MobileNavbar openStatus={openStatus} setOpenStatus={setOpenStatus} />
      </div>
    </div>
  )
}

export default MobileHeader