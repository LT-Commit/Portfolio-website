import '../Header.css'
import { Link } from "react-router-dom"

function Header()
{


    return(

    <header>
        <meow>
            <div class="Logo">  
            <h1>&lt;LT\N &gt; </h1>
            <div class="dropDowns">
            <Link to="/">&lt;Jurney&gt;</Link>
            <Link to="/Repos">&lt;Projects&gt;</Link>
            <Link to="/About-Me">&lt;About&gt;</Link>
            <Link to="/Contacts">&lt;Contact Me&gt;</Link>
            </div>

            </div>
            



            <hr></hr>
        </meow>
       </header>
    
    );
}

export default Header