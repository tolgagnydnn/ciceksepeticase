// React & Redux
import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks';
import { getAllCategories, getAllProducts } from './views/homepage/Main/mainSlice';

// Components
import Footer from './views/homepage/Footer/Footer';
import Header from './views/homepage/Header/Header';
import Main from './views/homepage/Main/Main';

function App() {

  const dispatch = useAppDispatch()

  useEffect(()=> {
    const promises = [
      dispatch(getAllProducts({
        id:1,
        q: ''
      })),
      dispatch(getAllCategories())
    ]
    Promise.all(promises)
  }, [dispatch])
  
  return (
    <div className="App app-container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

