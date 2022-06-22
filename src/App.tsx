// Styles
import './App.scss';

// Components
import Footer from './views/homepage/Footer/Footer';
import Header from './views/homepage/Header/Header';
import Main from './views/homepage/Main/Main';

function App() {
  return (
    <div className="App app-container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
