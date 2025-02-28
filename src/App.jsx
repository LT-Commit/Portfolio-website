import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Jurney } from './pages/jurney'
import {Contact} from './pages/contact'
import { Repos } from './pages/repos';
import { Aboutme } from './pages/aboutme';

function App() 
{

  
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Jurney/>}/>
        <Route path="/Contacts" element={<Contact/>}/>
        <Route path="/Repos" element={<Repos/>}/>
        <Route path="/About-Me" element={<Aboutme/>}/>
      </Routes>
    </Router>



    </>
  );
}

export default App
