import './app.scss'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import { Route } from 'react-router-dom';
import{Routes} from 'react-router-dom'
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import{useState} from 'react';

function App() {
  const[navToggle, setNavToggle] = useState(false);

  const navClick = ()=>{
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className='nav-button' onClick={navClick}>
        <div className='lines-1'></div>
        <div className='lines-2'></div>
        <div className='lines-3'></div>
      </div>
      <div className='main-content'>
          <div className='content'>
          <Routes>
            <Route path='/' 
            element={ <Home />}
            />
             <Route path='/about' 
            element={ <About />}
            />
             <Route path='/portfolio' 
            element={ <Portfolio />}
            />
             <Route path='/blogs' 
            element={ <Blogs />}
            />
             <Route path='/contact' 
            element={ <Contact />}
            />
          </Routes>
           
          </div>
      </div>
    </div>
  );
}

export default App;
