// Styles
import './style.scss'

// Data
import footerMenuData from './footerMenuData'

const FooterMenu = () => {
  return (
    <div className='footermenu'>
      {footerMenuData.map((menuitem: any) => (
        <div className='footermenu__menubox'>
          <div className='menubox-title'>
            <p> {menuitem.title} </p>
          </div>
          <div className='menubox-menu'>
            <ul>
              {menuitem.menu.map((item: any) => (
                <li>
                  <a href='!#'> {item.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default FooterMenu

