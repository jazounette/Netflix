import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Maison.css';
import '../styles/Login.css';
import HomeFooter from '../components/HomeFooterComponent/HomeFooter';

const Login = () => {
    const LearnMore = () => { return (
        <div className='col-12 text-secondary'><small>The information collected by Google reCAPTCHA is subject to the Google <a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</small></div>
    )}
    const LearnMoreLien = () => { return ( <>
            <a href='#dummymoure' onClick={learnMoreClick}><small>Learn more.</small></a>
            <div className='sépar-100px'></div>
        </> )}

    var [lecouriel, setLecouriel] = useState();
    var [motdepass, setMotdepass] = useState();
    var [lechuck, setLechuck] = useState();
    var [learnMore, setLearnMore] = useState();

    const navigate = useNavigate();

    function GérageCourielChange(e){  lecouriel = e.target.value }
    function GérageMDPChange(e){  motdepass = e.target.value }
    function GérageCheckage(e){  motdepass = e.target.checked }
    function quikaclick(){  navigate('/maison');  }
    function learnMoreClick(){ setLearnMore(true);  }

    return (
        <div className='container-fluid'>
            <div className='row bg-black'>
                <div className='imagàmoi'></div>
                {/* <div className='col-1 netflixlogo zind-2'>NETFLIX</div> */}
                <div className='col-2 zind-2 mt-4'>
                    <svg className='netflixlogo' viewBox="0 0 111 30" aria-hidden="true" focusable="false">
                        <path style={{fill: "red"}} d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                    </svg>
                </div>

                <div className='col-10'></div>
                <div className='col-md-4 offset-md-4 p-5 bg-black aligneG zind-2'>
                    <h1 className='mb-5'>Sign In</h1>
                    <form>
                        <input type="email" className="form-control mb-3" aria-describedby="emailHelp" placeholder="eMail or phone number" value={lecouriel} onChange={GérageCourielChange}></input>
                        {/* <small id="emailHelp" class="form-text text-muted">L'e-mail est obligatoire!</small> */}

                        <input type="password" className="form-control mb-5" aria-describedby="passHelp" placeholder="Password" value={motdepass} onChange={GérageMDPChange}></input>
                        {/* <small id="passHelp" class="form-text text-muted">L'e-mail est obligatoire!</small> */}

                        <button className='btn btn-danger w100p mb-2' onClick={quikaclick}>Sign In</button>

                        <div className='row'>
                            <div className='col-6'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={lechuck} id="checkmoiça" onChange={GérageCheckage}/>
                                <label className="form-check-label" htmlFor="checkmoiça">Remenber me</label>
                            </div>
                            </div>
                            <div className='col-6 aligneD'><a href="https://www.netflix.com/fr/LoginHelp">Need help?</a></div>
                        </div>
                        <div className='sépar-100px'></div>
                        <div className='col-12 text-secondary'><small>New to Netflix? <NavLink className="text-bold" to ="/maison">Sign up now.</NavLink></small></div>
                        <div className='col-12 text-secondary'><small>This page is protected by Google reCAPTCHA to ensure youre not a bot.&nbsp;</small>
                            { learnMore ? <LearnMore/> : <LearnMoreLien/> }
                        </div>
                    </form>
                </div>
            </div>

            {/* <div className='row bg-black mt-2' style={{ height: 333 }}>PIED DE PAGE</div> */}
            <HomeFooter/>

        </div>
    );
};

export default Login;