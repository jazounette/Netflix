import React from 'react';
import '../styles/Maison.css';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PromoBlock from '../components/PromoBlock';
import Commencer from '../components/Commencer';
import FAQ from '../components/FAQ';

const Maison = () => {
    const blockz = [ { titre:"Regardez Netflix sur votre TV.", describ: "Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.", image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png", vidéo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v", ordre: true },
                     { titre:"Téléchargez vos séries préférées pour les regarder hors connexion.", describ: "Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.", image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg", vidéo: "", ordre: false },
                     { titre:"Où que vous soyez.", describ: "Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.", image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png", vidéo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v", ordre: true },
                     { titre:"Créez des profils pour les enfants.", describ: "Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.", image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png", vidéo: "", ordre: false }  ]
    const navigate = useNavigate();

    function quikaclick(){  navigate('/login');  }

    return (
        <div className='container-fluid'>
            <div className='row entête bg-black'>
                <div className='imagàmoi'></div>
                    <div className='col-1 netflixlogo zind-2'>NETFLIX</div>
                    <div className='col-10'></div>
                    <div className='col-1 zind-2'>
                        <button className='btn btn-danger mt-4' onClick={quikaclick}>S'identifier</button>
                    </div>
                    <div className='col-12 zind-2'>
                        <h1>Films, séries TV et bien plus en illimité.</h1>
                        <p>Où que vous soyez. Annulez à tout moment.</p>
                        <Commencer/>
                    </div>
            </div>

            {blockz.map((val, key) => <PromoBlock key={key} titre={val.titre} describ={val.describ} ordre={val.ordre} image={val.image} vidéo={val.vidéo}/> )}

            <div className='row bg-black mt-2'>
                <h1 className='mt-5'>Foire aux questions</h1>
                <div className='col-6 offset-3 mt-4 mb-4'><FAQ/></div>
                <div className='col-12 mt-4 mb-5'><Commencer/></div>
            </div>
            <div className='row bg-black mt-2' style={{ height: 333 }}>PIED DE PAGE</div>

        </div>
    );
};

export default Maison;