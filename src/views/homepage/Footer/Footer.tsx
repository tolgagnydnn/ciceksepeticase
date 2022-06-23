// Styles
import './style.scss'

// Components
import FooterMobileApp from './components/FooterMobileApp/FooterMobileApp'
import FooterInformation from './components/FooterInformation/FooterInformation'
import FooterMenu from './components/FooterMenu/FooterMenu'
import FooterAbout from './components/FooterAbout/FooterAbout'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container container'>
        <FooterMobileApp />
        <div className='aboutandmenu'>
          <FooterAbout />
          <FooterMenu />
        </div>
        <FooterInformation />
      </div>
      <div className='footer__copyright'>
        <p>Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş</p>
      </div>
    </div>
  )
}

export default Footer