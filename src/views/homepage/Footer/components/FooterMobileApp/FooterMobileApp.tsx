// Styles
import './style.scss'

// Images
import telephone from '../../../../../assets/images/telephone.png'
import qrcode from '../../../../../assets/images/qrcode.png'
import googleplay from '../../../../../assets/images/googleplay.png'
import appstore from '../../../../../assets/images/appstore.png'

const FooterMobileApp = () => {
  return (
    <div className='mobileapp'>
      <div className='mobileapp__image'>
        <img src={telephone} alt='telephone' />
      </div>
      <div className='mobileapp__info'>
        <div className='info-title'>
          <div className='info-qrcode'>
            <img src={qrcode} alt='qrcode' />
          </div>
          <div className='info-description'>
            <span> Çiçek Sepeti Mobil Uygulamayı İndirin </span>
            <span> Mobil Uygulamayı QR Kod ile İndirin. </span>
          </div>
        </div>
        <div className='info-downloadimages'>
          <div className='downloadimages-googleplay'>
            <img src={googleplay} alt='googleplay' />
          </div>
          <div className='downloadimages-appstore'>
            <img src={appstore} alt='appstore' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMobileApp