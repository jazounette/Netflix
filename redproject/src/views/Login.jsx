import React, { useState } from 'react';
import '../styles/Maison.css';
import '../styles/Login.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const LearnMore = () => { return (
        <div className='col-12 text-secondary'>The information collected by Google reCAPTCHA is subject to the Google <a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</div>
    )}
    const LearnMoreLien = () => { return ( <>
            <a href='#dummymoure' onClick={learnMoreClick}>Learn more.</a>
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
                <div className='col-1 netflixlogo zind-2'>NETFLIX</div>
                <div className='col-11'></div>
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
                        <div className='col-12 text-secondary'>New to Netflix? <NavLink className="text-bold" to ="/maison">Sign up now.</NavLink></div>
                        <div className='col-12 text-secondary'>This page is protected by Google reCAPTCHA to ensure youre not a bot.&nbsp;
                            { learnMore ? <LearnMore/> : <LearnMoreLien/> }
                        </div>
                    </form>
                </div>
            </div>

            <div className='row bg-black mt-2' style={{ height: 333 }}>PIED DE PAGE</div>

        </div>
    );
};

export default Login;