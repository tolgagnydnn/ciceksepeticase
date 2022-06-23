// React
import { useState } from 'react'

// Styles
import './style.scss'

// Images
import mainLogo from '../../../../../assets/images/logo.png'
import basket from '../../../../../assets/images/mobilebasket.png'
import menuicon from '../../../../../assets/images/categories.png'

// Components
import MobileNavbar from './MobileNavbar'

const MobileHeader = () => {

  const [openStatus, setOpenStatus] = useState(false)

  return (
    <div className='mobilenavbar'>
      <div className='mobilenavbar__header'>
        <div className='header-menuicon'>
          <img onClick={() => setOpenStatus(true)} src={menuicon} alt="menuicon" />
        </div>
        <div className='header-mobilelogo'>
          <img src={mainLogo} alt="mainLogo" />
        </div>
        <div className='header-basket'>
          <img src={basket} alt="basket" />
        </div>
      </div>
      <div className='mobilenavbar__search'>
        <form className="search-form" id="searchform">
          <input type="text" name="arama" className="search-input" placeholder="Ürün Ara" />
          <button className="search-btn">
            Ara
          </button>
        </form>
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