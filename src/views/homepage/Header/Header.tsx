// React & Redux
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getAllProducts } from '../Main/mainSlice'

// Hooks
import useMediaQuery from '../../../hooks/useMediaQuery'

// Components
import MobileHeader from './components/MobileHeader/MobileHeader'
import DesktopHeader from './components/DesktopHeader/DesktopHeader'



const Header = () => {

  const store = useAppSelector(state => state.products)
  const isMobile = useMediaQuery('(max-width: 767.98px)')

  const dispatch = useAppDispatch()

  const searchProducts = (value: string) => {
    if (value.length > 2) {
      dispatch(getAllProducts({ ...store.params, q: value }))
    } else {
      dispatch(getAllProducts({ ...store.params, q: '' }))
    }
  }

  return (
    isMobile
      ? <MobileHeader
        store={store}
        searchProducts={searchProducts}
      />
      : <DesktopHeader
        store={store}
        searchProducts={searchProducts}
      />
  )
}

export default Header