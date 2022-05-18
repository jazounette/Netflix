import React from 'react';
import './Etape2.css';
import {useNavigate} from "react-router-dom";

const Etape2=()=>{
    const navigate = useNavigate();
    function quickClick(){navigate('/forfaits'); }

    return (
        <div className='fondblanc img'>
            <img src="http://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="" width={50} height={50}/>
            <p>ÉTAPE 2 SUR 3</p>
            <h1><p>Chiosissez votre <br/>
            forfait.</p></h1><object data="" type=""></object>

            <div className='img'>
            <p><img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="" width={30} height={30}/>  Sans engagement. Annulable à<br/>
                     tout moment</p>
            </div>
            
            <div>
            <p><img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="" width={30} height={30}/> Tous les programmes Netflix <br/>
                 pour un abonnement très <br/>
                  attractif.</p>
           <div>
            <p><img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="" width={30} height={30}/> Accès illimité sur tous vos <br/>
                appareills.</p>
            </div>
            </div>
            
            <div>
                <button  type="submit" className="suivant btn btn-danger lg w-25 p-3" onClick={quickClick} style={{width: "250px" }} >Suivant</button>
            </div> 
    </div>
   );

}


export default Etape2;