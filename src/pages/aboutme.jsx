import Header from '../components/Header'
import Footer from '../components/Footer'
import '../aboutme.css'
import glorp from '../assets/download.jfif'

export function Aboutme()
{



    return(
        <>
        <Header></Header>


        <div class="Aboutme-Box">
        <h2>About Me!</h2>
        <li>18 years old!</li>
        <li class="rainbow">Any pronouns because gender is stupid</li>
        <li>Software development Student</li>
        </div>
        <div class="Aboutme-Box">
        <h2>Goals with my projects:</h2>
        <li>With most of my projects i like to take my time and learn what is happening behind the scenes of my projects,
             due to this i will mostly use c++ or C in my programming journey</li>
             <p></p>
        <li>With all my projects i will always try break down everything i write int he coding project, Not only to renforce my learning but also so i can look back on it in the future,
            and probably laugh at how bad i wrote it but hey i like to keep track of my progress.
        </li>
        <p></p>
        <li>
            By the end of 3 months from now starting at 0/1/03/2025 i want to have read most of the books im currently reading and show i have learned from them,
            To do this i will be creating alot of repos on my GitHub, This is a way for me to track my progress and also to motivate myself.
        </li>
        </div>
        <div class="Aboutme-Box">
        <h2>Books Im reading:</h2>
        <li>Windows Internals by Pavel Yosofovich!</li>
        <li>Windows Kernel Programming by Pavel Yosifovich</li>
        <li>Grokking Algorithms by Aditya Y Bhargava</li>
        <li>The C programming language by Brian W</li>
        <li>Computer science Distilled by Wladston Ferrera Filo</li>
        <li>Practical Reverse Engineering by Alexandre Gazet</li>
        </div>

        <p></p>
        <img src={glorp} alt="glorp"></img>


        <Footer></Footer>
        </>
    ) 
}