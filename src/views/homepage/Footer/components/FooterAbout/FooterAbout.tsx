// Style
import './style.scss'

// Images
import logo from 'assets/images/logo.png'
import facebook from 'assets/images/facebook.png'
import twitter from 'assets/images/twitter.png'
import instagram from 'assets/images/instagram.png'
import youtube from 'assets/images/youtube.png'
import blog from 'assets/images/blog.png'

const FooterAbout = () => {
  return (
    <div className='footerabout'>
      <div className='footerabout__logo'>
        <img src={logo} alt='footerlogo' />
      </div>
      <div className='footerabout__socialmedia'>
        <img src={facebook} alt='facebook' />
        <img src={twitter} alt='twitter' />
        <img src={instagram} alt='instagram' />
        <img src={youtube} alt='youtube' />
        <img src={blog} alt='blog' />
      </div>
      <div className='footerabout__description'>
        <p>
          CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz.
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine <a href="!#">buradan</a> ulaşabilirsiniz.
        </p>
      </div>
    </div>
  )
}

export default FooterAbout