// Styles
import './style.scss'

// Data
import footerMenuData, { FooterMenuInterface, Menu } from './footerMenuData'

const FooterMenu = () => {
  return (
    <div className='footermenu'>
      {footerMenuData.map((menuitem:FooterMenuInterface) => (
        <div className='footermenu__menubox' key={menuitem.id}>
          <div className='menubox-title'>
            <p> {menuitem.title} </p>
          </div>
          <div className='menubox-menu'>
            <ul>
              {menuitem.menu.map((item: Menu) => (
                <li key={item.id}>
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

