import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Home, Catalog, Details } from './pages';
import 'swiper/swiper.min.css'
import './styles/styles.scss';
import { Footer, Header } from './components';
import Routes from './Routes';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
