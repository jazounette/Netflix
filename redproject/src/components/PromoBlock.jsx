import React from 'react';

const PromoBlock = ( {titre, describ, image, ordre } ) => {

    function prout (toto){
        return (toto) ? "col-md-5 offset-md-1 order-1" : "col-md-5 order-2";
    }

    return (
        <div className='row align-items-center bg-black mt-2'>
            <div className={prout(ordre)}>
                <h1>{titre}</h1>
                <p>{describ}</p>
            </div>
            <div className={prout(!ordre)}>
                <img className='img-fluid' src={image} alt="netflixestvotreamisdonnerargentànetflix"></img>
            </div>
        </div>

    );
};

export default PromoBlock;
