import './Games.css'
import gamePic from './assets/borderlands1.jpg'

function Games(GameNumber)
{
    // constant array, JS automatically knows the type in this case string
    
    const Borderlands = ["Borderlands", "Borderlands 2", "Borderlands 3"]
    


    return(
        <>
        <games>
        <div className="gCard">
        <img className="gCard-Image" src={gamePic} alt="Borderlands 1 Pic"></img>
        <p>{Borderlands[GameNumber.Number]}</p>
        </div>
        </games>
        </>

    );
}

export default Games