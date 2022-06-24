// Styles
import './style.scss'

// Images
import mainLogo from 'assets/images/logo.png'

// Components
import Categories from '../../../components/Categories/Categories'

const MobileNavbar = (props: any) => {

    const { openStatus, setOpenStatus } = props

    return (
        <div className={openStatus ? 'navbar-menu' : 'navbar-menu close-menu'}>
            <div className='menu-logo'>
                <img src={mainLogo} alt="logo" />
            </div>
            <div className='navbar-items'>
                <Categories setOpenStatus={setOpenStatus} />
            </div>
            <div className='navbar-close'>
                <button onClick={() => setOpenStatus(false)}> &times; </button>
            </div>
        </div>
    )
}

export default MobileNavbar