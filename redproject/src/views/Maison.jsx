import React from 'react';
import '../styles/Maison.css';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PromoBlock from '../components/PromoBlock';
import Commencer from '../components/Commencer';
import FAQ from '../components/FAQ';
import HomeFooter from '../components/HomeFooterComponent/HomeFooter';

const Maison = () => {
    const blockz = [ { titre:"Regardez Netflix sur votre TV.", describ: "Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.", image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png", vidéo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v", vidlarg: 70, vidtop: 22, ordre: true, dlboule: false },
                     { titre:"Téléchargez vos séries préférées pour les regarder hors connexion.", describ: "Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.", image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg", vidéo: "", ordre: false, dlboule: true },
                     { titre:"Où que vous soyez.", describ: "Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.", image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png", vidéo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v", vidlarg: 60, vidtop: 12, ordre: true, dlboule: false },
                     { titre:"Créez des profils pour les enfants.", describ: "Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.", image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png", vidéo: "", ordre: false, dlboule: false }  ]
    const navigate = useNavigate();

    function quikaclick(){  navigate('/login');  }

    return (
        <div className='container-fluid'>
            <div className='row entête bg-black'>
                <div className='imagàmoi'></div>
                    {/* <div className='col-1 netflixlogo zind-2'>NETFLIX</div> */}
                    <div className='col-2 zind-2 mt-4'>
                        <svg className='netflixlogo' viewBox="0 0 111 30" aria-hidden="true" focusable="false">
                            <path style={{fill: "red"}} d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                        </svg>
                    </div>

                    <div className='col-9'></div>
                    <div className='col-1 zind-2'>
                        <button className='btn btn-danger mt-4' onClick={quikaclick}>S'identifier</button>
                    </div>
                    <div className='col-12 zind-2'>
                        <h1>Films, séries TV et bien plus en illimité.</h1>
                        <p>Où que vous soyez. Annulez à tout moment.</p>
                        <Commencer/>
                    </div>
            </div>

            {blockz.map((val, key) => <PromoBlock key={key} titre={val.titre} describ={val.describ} ordre={val.ordre} image={val.image} vidurl={val.vidéo} vidlarg={val.vidlarg} vidtop={val.vidtop} dlboule={val.dlboule}/> )}

            <div className='row bg-black mt-2'>
                <h1 className='mt-5'>Foire aux questions</h1>
                <div className='col-6 offset-3 mt-4 mb-4'><FAQ/></div>
                <div className='col-12 mt-4 mb-5'><Commencer/></div>
            </div>
            {/* <div className='row bg-black mt-2' style={{ height: 333 }}>PIED DE PAGE</div> */}
            <HomeFooter/>

        </div>
    );
};

export default Maison;