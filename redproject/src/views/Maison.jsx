import React, { useState } from 'react';
import '../styles/Maison.css';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Navabara from '../composants/Navabara';

const Maison = () => {
    var [lecouriel, setLecouriel] = useState();
    const navigate = useNavigate();

    function GérageCourielChange(e){  lecouriel = e.target.value }
    function quikaclick(){  navigate('/inscription');  }

    return (
        <div className='container-fluid'>
            <div className='row bg-black'>
            {/* <Navabara/> */}
                <div className='col-1 netflixlogo'>NETFLIX</div>
                <div className='col-10'></div>
                <div className='col-1'>
                    <button className='btn btn-danger'>S'identifier</button>
                </div>
                <div className='col-12'>
                    <h1>Films, séries TV et bien plus en illimité.</h1>
                    <p>Où que vous soyez. Annulez à tout moment.</p>
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
            </div>

            <div className='row align-items-center bg-black mt-2'>
                <div className='col-md-5 offset-md-1'>
                    <h1>Regardez Netflix sur votre TV.</h1>
                    <p>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.</p>
                </div>
                <div className='col-md-5'>
                    <img className='img-fluid' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt="netflixsurtatéléconnecté"></img>
                </div>
            </div>

            <div className='row align-items-center bg-black mt-2'>
                <div className='col-5'>
                    <img className='img-fluid' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt="netflixsurtonsmartphone"></img>
                </div>
                <div className='col-5 offset-1'>
                    <h1>Téléchargez vos séries préférées pour les regarder hors connexion.</h1>
                    <p>Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.</p>
                </div>
            </div>

            <div className='row align-items-center bg-black mt-2'>
                <div className='col-5 offset-1'>
                    <h1>Où que vous soyez.</h1>
                    <p>Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.</p>
                </div>
                <div className='col-5'>
                    <img className='img-fluid' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt="minighostbuster"></img>
                </div>
            </div>

            <div className='row align-items-center bg-black mt-2'>
                <div className='col-5'>
                    <img className='img-fluid' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png' alt="netflixpourlézenfants"></img>
                </div>
                <div className='col-5 offset-1'>
                    <h1>Créez des profils pour les enfants.</h1>
                    <p>Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.</p>
                </div>
            </div>



        </div>
    );
};

export default Maison;