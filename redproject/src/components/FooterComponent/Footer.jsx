import React from 'react';
import './footer.style.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
               <p>Des questions ? Appelez le <a>(+33)0805-543-06</a></p>
            </div>
            <div className='footerBottom'>
                <div>
                    <ul>
                        <li className='itemSpan'><span>FAQ</span></li>
                        <li className='itemSpan'><span>Préférences de coockies</span></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='itemCentral1'><span>Centre d'aide</span></li>
                        <li className='itemCentral2' ><span>Mentions légales</span></li>
                    </ul>
                </div>
                <div className='itemAntipenult'>
                    <p><span>Conditions d'utilisation</span></p> 
                </div>
                <div className='itemLast'>
                    <p><span>Confidentialités</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;