import React from 'react';
import './homeFooter.style.css';

export default function HomeFooter() {
    return (
        <div className='row homeFooter mt-2'>
            <div className="footElements">
                <div className="footerTop">
                   
                </div>
                <div className="monTableau">
                <p className='spanParagr pSimon'><span>Des questions ? Appelez le (+33)0805-543-06</span></p>
                    <table className="table">
                        <tbody>
                            <tr className='trSimon'>
                                <td className='itemSpan1'><span><a href="https://help.netflix.com/fr/node/412">FAQ</a></span></td>
                                <td  className='itemCentral1'><span><a href="https://help.netflix.com/fr/">Centre d'aide</a></span></td>
                                <td className='itemSpan2'><span><a href="https://www.netflix.com/youraccount">Compte</a></span></td>
                                <td className='itemCentral2'><span><a href="https://media.netflix.com/fr/">Presse</a></span></td>
                                
                            </tr>
                            <tr className='trSimon'>
                                <td className='itemSpan2'><span><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Relations Investisseurs</a></span></td>
                                <td className='itemSpan2'><span><a href="https://jobs.netflix.com/">Recrutement</a></span></td>
                                <td className='itemSpan2'><span><a href="https://www.netflix.com/fr/redeem">Utiliser des cartes cadeau</a></span></td>
                                <td className='itemSpan2'><span><a href="https://www.netflix.com/gift-cards">Acheter des cartes cadeau </a></span></td>
               
                            </tr>
                            <tr className='trSimon'>
                                <td className='itemSpan2'><span><a href="https://devices.netflix.com/fr/">Modes de lecture</a></span></td>
                                <td className='itemSpan2'><span><a href="https://help.netflix.com/legal/termsofuse">Conditions d'utilisation</a></span></td>
                                <td className='itemSpan2'><span><a href="https://help.netflix.com/legal/privacy">Confidentialités</a></span></td>
                                <td className='itemSpan2'><span><a href="https://www.netflix.com/fr/">Préférences de coockies</a></span></td>
                                
                                
                            </tr>
                            <tr className='trSimon'>
                                <td className='itemSpan2'><span><a href="https://help.netflix.com/legal/corpinfo">Mentions légales</a></span></td>
                                <td className='itemSpan2'><span><a href="https://help.netflix.com/fr/contactus">Nous contacter</a></span></td>
                                <td className='itemSpan2'><span><a href="https://fast.com/fr/">Test de vitesse</a></span></td>
                                <td className='itemSpan2'><span><a href="https://help.netflix.com/legal/notices">Informations légales</a></span></td>                                
                                
                            </tr>
                            <tr className='trSimon'>
                                <td className='itemSpan2'><span><a href="https://www.netflix.com/fr/browse/genre/839338">Seulement sur Netflix</a></span></td>
                                
                            </tr>
                        
                        </tbody>
                        
                    </table>
                    <div className='spanParagr'><p className='pSimon'><span>Netflix France</span></p></div>
                    
                </div>

                </div>
        </div>
    );
};
