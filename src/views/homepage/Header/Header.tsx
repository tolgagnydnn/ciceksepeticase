// Styles
import './style.scss'

// Hooks
import useMediaQuery from '../../../hooks/useMediaQuery'
import MobileHeader from './components/MobileHeader/MobileHeader'
import DesktopHeader from './components/DesktopHeader/DesktopHeader'

const Header = () => {

  const isMobile = useMediaQuery('(max-width: 767.98px)')

  return (
    isMobile
      ? <MobileHeader />
      : <DesktopHeader />
  )
}

export default Header