import React from 'react';
import './Etape1.css';
import {useNavigate, useLocation} from "react-router-dom";


const Etape1=()=>{
   const navigate = useNavigate();
   const location = useLocation();

   function quickClick(){navigate('/etape2'); }
   
   return (
    <div className='fondblanc'>
    {/* <div className='d-flex flex-row justify-content-center mt-4'> */}
    {/* bootstrap n'étant pas activé pour Thekra mais sur le projet master. je suis obligé de commenter cette ligne pour avoir le même rendu */}
        <div className='card-title'>
            <p>ÉTAPE 1 SUR 3</p>
            </div>
            <div class="card-titre">
            <h2 text-left pt-4>Ravis de vous revoir! <br/>
                  Inscrivez-vous, cela ne <br/>
                  prendre que quelques <br/>
                 minutes.</h2>      
        </div>
            <div>
                <p> Entrez votre mot de passe pour commencer à <br/>
                     regarder vos films et séries préférés.<br/>
                </p>
            </div>

            <div>
            <p> E-mail <br/>
                {location.state.lecouriel}
            </p>
            </div>
    
            <div>
            <input type="text" name="mdp" placeholder="Entrez votre mot de passe"  style={{width: "250px"}}></input>
            <p style={{color: "blue"}}>Mot de passe oublié?</p>
            </div>
           
        <div className='button'>  
            <button  type="submit" className="btn btn-danger text-white buttonTheckra" onClick={quickClick} style={{width: "250px"}}>Suivant</button>
        </div>
        
    </div>
   );
}


export default Etape1;