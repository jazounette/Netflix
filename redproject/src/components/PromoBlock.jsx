import React from 'react';
import '../styles/PromoBlock.css';

const PromoBlock = ( { titre, describ, image, ordre, vidurl, vidlarg, vidtop } ) => {
    //const vidRef = useRef(null);
    // console.log (vidurl);
    var vidleffe = ((100-vidlarg)/2);
    
    function prout (toto){  return (toto) ? "col-md-5 offset-md-1 order-1" : "col-md-5 order-2";  }
    function yavidoupas (toto) { return (toto === "") ? "d-none" : "vidéoàmoi"; }

    return (
        <div className='row align-items-center bg-black mt-2'>
            <div className={prout(ordre)}>
                <h1>{titre}</h1>
                <p>{describ}</p>
            </div>
            <div className={prout(!ordre)}>
                <div className='wrapper'>
                    <video className={yavidoupas(vidurl)} style={{width: vidlarg+'%', top: vidtop+'%', left: vidleffe+'%'}} controls muted loop autoPlay>
                        <source src={vidurl} type="video/mp4"/>
                    </video>
                    <img className='img-fluid imageCadre' src={image} alt="netflixestvotreamisdonnerargentànetflix"></img>
                </div>
            </div>
        </div>
    );
};

export default PromoBlock;



//<iframe height="333px" width="444px" className='vidéoàmoi' title="PromoBlock" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></iframe>


// <div className="embed-responsive embed-responsive-16by9">
//     <iframe title="PromoBlock" className="embed-responsive-item" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></iframe>
// </div>
