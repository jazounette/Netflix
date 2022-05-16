import React, { useState } from 'react';
import '../styles/Maison.css';
import '../styles/Login.css';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    var [lecouriel, setLecouriel] = useState();
    var [motdepass, setMotdepass] = useState();
    var [lechuck, setLechuck] = useState();

    const navigate = useNavigate();

    function GérageCourielChange(e){  lecouriel = e.target.value }
    function GérageMDPChange(e){  motdepass = e.target.value }
    function GérageCheckage(e){  motdepass = e.target.checked }
    function quikaclick(){  navigate('/maison', { state: {lecouriel:lecouriel} } );  }

    return (
        <div className='container-fluid'>
            <div className='row bg-black'>
                <div className='imagàmoi'></div>
                <div className='col-1 netflixlogo toto'>NETFLIX</div>
                <div className='col-11'></div>
                <div className='col-md-4 offset-md-4 p-5 bg-black aligneG toto'>
                    <h1>Sign In</h1>
                    <form>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="eMail or phone number" value={lecouriel} onChange={GérageCourielChange}></input>
                        {/* <small id="emailHelp" class="form-text text-muted">L'e-mail est obligatoire!</small> */}

                        <input type="password" className="form-control" aria-describedby="passHelp" placeholder="Password" value={motdepass} onChange={GérageMDPChange}></input>
                        {/* <small id="passHelp" class="form-text text-muted">L'e-mail est obligatoire!</small> */}

                        <button className='btn btn-danger titi' onClick={quikaclick}>Sign In</button>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value={lechuck} id="checkmoiça" onChange={GérageCheckage}/>
                            <label class="form-check-label" for="checkmoiça">Remenber me</label>
                        </div>
                    </form>

                </div>
            </div>

            <div className='row bg-black mt-2' style={{ height: 333 }}>PIED DE PAGE</div>

        </div>
    );
};

export default Login;