import { useState ,useEffect } from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Cats from './Cats';

function App() {
  const [inventoryCount, setInventoryCount] = useState(0);
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
      { page === '/about' && <About/>}
      { page === '/cats' && <Cats/>}
      
      <Footer/>
    </>
  );
}

export default App;
