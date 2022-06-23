// React & Redux
import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks';
import { getAllProducts } from './views/homepage/Main/mainSlice';

// Styles
import './App.scss';


// Components
import Footer from './views/homepage/Footer/Footer';
import Header from './views/homepage/Header/Header';
import Main from './views/homepage/Main/Main';

function App() {

  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(getAllProducts())
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
