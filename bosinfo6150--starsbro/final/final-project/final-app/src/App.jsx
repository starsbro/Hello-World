import { useState ,useEffect } from 'react';
import './App.css';

import Header from './Header';


import Home from './Home';
import About from './About';
import Cats from './Cats';
import Privacy from './Privacy';
import Value from './Value';
import Contact from './Contact';
import Social from './Social';

import Footer from './Footer';


function App() {
  
  const [ page, setPage ] = useState('/');
  
  useEffect( () => {
    function handlePageLoad() {
      console.log('change state');
      setPage(document.location.pathname);
    }
      handlePageLoad();
      window.addEventListener('popstate',handlePageLoad);

      return () => {
        console.log('cleanup');
        window.removeEventListener('popstate',handlePageLoad);
      }
    },[]);

  return (
    <>
      <Header setPage = {setPage}/>
      { page === '/' && <Home/>}
      { page === '/about/' && <About/>}
      { page === '/cats/' && <Cats/>}
      { page === '/privacy/' && <Privacy/>}
      { page === '/values/' && <Value/>}
      { page === '/contact/' && <Contact/>}
      { page === '/social/' && <Social/>}

      <Footer/>
     
    </>
  );
}

export default App;
