import React, { useState } from 'react';
import '../styles/Commencer.css';
import { useNavigate } from 'react-router-dom';

const Commencer = () => {
    var [lecouriel, setLecouriel] = useState();

    const navigate = useNavigate();

    function GérageCourielChange(e){  lecouriel = e.target.value }
    function quikaclick(){  navigate('/inscription', { state: {lecouriel:lecouriel} } );  }

    return (
    <div>
        <p>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
        <form>
            <div className='d-flex justify-content-center'>
                <div>
                    <input type="email" className="form-control courriel" aria-describedby="emailHelp" placeholder="Adresse e-mail" value={lecouriel} onChange={GérageCourielChange}></input>
                    {/* <small id="emailHelp" class="form-text text-muted">L'e-mail est obligatoire!</small> */}
                </div>
                <div>
                    <button className='btn btn-danger' onClick={quikaclick}>Commencer</button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default Commencer;
