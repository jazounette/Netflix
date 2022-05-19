import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import './forfaits.style.css';
import Footer from '../FooterComponent/Footer';


export default function Forfaits () {


  const [style1, setStyle1] = useState("styleValeurs1");
  const [styleFleche1, setStyleFleche1] = useState("styleValeursA");
 
  const changeStyle1 = () => {
    setStyle1("styleValeurs2");
    setStyle2("styleValeurs1");
    setStyle3("styleValeurs1");

    setStyleFleche1("styleValeursB");
    setStyleFleche2("styleValeursA");
    setStyleFleche3("styleValeursA");
  };

  const [style2, setStyle2] = useState("styleValeurs1");
  const [styleFleche2, setStyleFleche2] = useState("styleValeursA");

  const changeStyle2 = () => {
    setStyle2("styleValeurs2");
    setStyle1("styleValeurs1");
    setStyle3("styleValeurs1");

    setStyleFleche1("styleValeursA");
    setStyleFleche2("styleValeursB");
    setStyleFleche3("styleValeursA ");
  };

  const [style3, setStyle3] = useState("styleValeurs1");
  const [styleFleche3, setStyleFleche3] = useState("styleValeursA");
  const changeStyle3 = () => {
    setStyle3("styleValeurs2");
    setStyle1("styleValeurs1");
    setStyle2("styleValeurs1");

    setStyleFleche1("styleValeursA");
    setStyleFleche2("styleValeursA");
    setStyleFleche3("styleValeursB");
  };


const navigate = useNavigate();
function GoToModePaiement(){
{/* 
  if({ModePaiement} == {CarteBankCarteCredit}){
      navigate('/ModeDePaiement1');
     }
     else{
      navigate('/ModeDePaiement2');
     }
    */}
navigate('/ModeDePaiement');
}


return (
<div className='fondblanc'>
<div className="monTableau">

          <table className="table">

                  <tbody>
                        <tr>
                            <td className='tdClass'></td>

                            <td className='tdClass'>
                             <div className='monBlock'>
                                <button className={style1} onClick={changeStyle1}>
                                  
                                  
                                    <div className="card monForfait essentiel text-white bg-danger mx-auto" width={123} height={123}>
                                    <div className="card-body">
                                    <p className="card-title special">Essentiel</p>
                                    </div>
                                    </div>
                                 {/*   <div className="arrow-down1" width={19} height={14} opacity= {0.6}></div>*/}
                                </button>
                                <div className={styleFleche1}>
                                <div className="arrow-down1 " ></div> 
                                </div>
                              </div>
                            </td>

                            
                            <td className='tdClass'>
                            <div className='monBlock'>
                                <button className={style2} onClick={changeStyle2}>
                                <div className="card monForfait standard text-white bg-danger mw-100 w-100">
                                <div className="card-body">
                                <p className="card-title special">Standard</p>
                                </div>
                                </div>
                                
                                </button>
                                <div className={styleFleche2}>
                                   <div className="arrow-down2 " ></div> 
                                </div>
                               
                                </div>
                            </td>
                            
                            <td className='tdClass'>
                            <div className='monBlock'>
                                <button className={style3} onClick={changeStyle3}>
                                <div className="card monForfait premium text-white bg-danger mw-100 w-100">
                                <div className="card-body">
                                <p className="card-title special">Premium</p>
                                </div>
                                </div>
                                
                                </button>
                                <div className={styleFleche3}>
                                <div className="arrow-down3 " ></div> 
                                </div>
                              </div>
                            </td>
                            
                        </tr>
                        <tr>
                            <td className="titre tdClass">Abonnement mensuel</td>
                            <td className={"tdClass " + style1}>8,99</td>
                            <td className={"tdClass " + style2}>13,49</td>
                            <td className={"tdClass " + style3}>17,99</td>
                        </tr>

                        <tr>
                            <td className="titre tdClass">Qualité video</td>
                            <td className="tdClass"><span className={style1} tdClass>Bonne</span></td>
                            <td className={"tdClass " + style2}>Meilleure</td>
                            <td className={"tdClass " + style3}>Optimale</td>

                        </tr>
                        <tr>
                            <td className="titre tdClass">Résolution</td>
                            <td className={"tdClass " + style1}>480p</td>
                            <td className={"tdClass " + style2}>1080p</td>
                            <td className={"tdClass " + style3}>4K+HDR</td>

                        </tr>
                        <tr>
                            <td className="tdClass">
                            Netflix sur votre TV, ordinateur, smartphone et
                            <br /> tablette
                            </td>
                            <td className="tdClass">
                            <img src="http://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="accord" className={style1} width={50} height={50}/>
                            </td>
                            <td className="tdClass">
                            <img src="http://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="accord" className={style2} width={50} height={50}/>
                            </td>
                            <td className="tdClass">
                            <img src="http://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="accord" className={style3} width={50} height={50}/>
                            </td>
                        </tr>
                  </tbody>
          </table>
</div>
<div className="notaBene">
<p className="disponibilite">
La disponibilité de la DH (720p), de la FullHD (108), de l'Ultra HD4
et de la HDR dépend de votre connection Internet et des <br />
capacités de l'appareil. Tous les contenus ne sont pas disponibles
dans toutes les résolutions. Pour en savoir plus, veuillez consulter
<br />
nos <a className="lienA" href="https://help.netflix.com/legal/termsofuse">Conditions d'utilisation</a>

</p>
<p className="usersAutorises">
Seules les personnes qui vivent avec vous peuvent utiliser votre
compte. Regardez Netflix en simultanné sur 4 appareils différents
<br />
avec le forfait Premium, sur 2 avec le forfait standard, et sur 1
avec le forfait Essentiel.
</p>
</div>

<div className="suivantContainer">


<a href="https://www.netflix.com/signup/payment" className="suivant btn btn-danger btn-lg btn-block lienA">Suivant</a>

{/*<button type="submit" className="suivant btn btn-danger btn-lg btn-block" onClick={GoToModePaiement}>Suivant</button>*/}

</div>
<Footer />

 </div>
);
};
