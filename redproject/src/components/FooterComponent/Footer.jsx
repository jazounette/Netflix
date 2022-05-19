import React from 'react';
import './footer.style.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div class="footElements">
               <div class="footerTop">

                    <p className='paragr'><span><a href="https://help.netflix.com/contactus" className='lienA'>Des questions ? Appelez le (+33)0805-543-06</a></span></p>
                </div>
                <div className='footerBottom'>
                    <div>
                        <div>

                            <p className='itemSpan1 liste'><span><a href="https://help.netflix.com/legal/termsofuse" className='lienA'>FAQ</a></span></p>
                            <p className='itemSpan1 liste'><span><a href="https://www.netflix.com/signup/platform#" className='lienA'>Préférences de coockies</a></span></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='itemSpan1 liste'><span><a href="https://help.netflix.com" className='lienA'>Centre d'aide</a></span></p>
                            <p className='itemSpan1 liste'><span><a href="https://help.netflix.com/legal/corpinfo" className='lienA'>Mentions légales</a></span></p>
                        </div>
                    </div>
                    <div className='itemAntipenult1'>
                        <p className='itemSpanCond liste'><span><a href="https://help.netflix.com/legal/termsofuse" className='lienA'>Conditions d'utilisation</a></span></p>
                    </div>
                    <div className='itemLast'>

                        <p className='itemSpan1 liste'><span><a href="https://help.netflix.com/legal/privacy" className='lienA'>Confidentialités</a></span></p>
                    </div>
                </div>
                </div>
        </div>
    );
};

