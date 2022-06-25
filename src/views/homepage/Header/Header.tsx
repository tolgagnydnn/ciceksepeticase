// React & Redux
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getAllProducts } from '../Main/mainSlice'

// Hooks
import useMediaQuery from 'hooks/useMediaQuery'

// Components
import MobileHeader from './components/MobileHeader/MobileHeader'
import DesktopHeader from './components/DesktopHeader/DesktopHeader'

const Header = () => {

  const dispatch = useAppDispatch()

  // Global State
  const { params, basket: { count } } = useAppSelector(state => state.products)

  // Responsive Status
  const isMobile = useMediaQuery('(max-width: 767.98px)')

  // Search Products
  const searchProducts = (value: string) => {
    if (value.length > 2) {
      dispatch(getAllProducts({ ...params, q: value }))
    } else {
      dispatch(getAllProducts({ ...params, q: '' }))
    }
  }

  return (
    isMobile
      ? <MobileHeader
        count={count}
        searchProducts={searchProducts}
      />
      : <DesktopHeader
        count={count}
        searchProducts={searchProducts}
      />
  )
}

export default Header