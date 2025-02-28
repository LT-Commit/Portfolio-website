import Header from '../components/Header'
import Footer from '../components/Footer'
import '../aboutme.css'

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
        
        </div>


        <Footer></Footer>
        </>
    ) 
}