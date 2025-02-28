import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import {Jurney} from './pages/jurney';
//import {Aboutme} from './pages/aboutme';
//import {Repos} from './pages/repos';
//import {Contact} from './pages/contact';


export default function App() 
{

  
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Jurney/>}/>
      </Routes>
    </Router>



    </>
  );
}
