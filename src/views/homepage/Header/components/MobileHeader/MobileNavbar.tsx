// Styles
import './style.scss'

// Images
import mainLogo from '../../../../../assets/images/logo.png'

const MobileNavbar = (props: any) => {

    const {openStatus, setOpenStatus} = props;

    return (
        <div className={openStatus ? 'navbar-menu' : 'navbar-menu close-menu'}>
            <div className='menu-logo'>
                <img src={mainLogo} alt="logo" />
            </div>
            <div className='navbar-items'>
                <ul>
                    <li>
                        <a href='!#'> Çiçekler </a>
                    </li>
                    <li>
                        <a href='!#'> Hediyeler </a>
                    </li>
                    <li>
                        <a href='!#'> Güller </a>
                    </li>
                    <li>
                        <a href='!#'> Papatyalar </a>
                    </li>
                </ul>
            </div>
            <div className='navbar-close'>
                <button onClick={() => setOpenStatus(false)}> &times; </button>
            </div>
        </div>
    )
}

export default MobileNavbar