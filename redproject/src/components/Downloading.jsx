import React from 'react';
import '../styles/Downloading.css';

const Downloading = () => {
    return (
        <div className='row align-items-center roundage'>
            <div className='col-2 p-0'>
                <img className='img-fluid imgdl01' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="netflixtaimetuaimenetflixtuvénérenetflix" />
            </div>
            <div className='col-8'> Downloading...</div>
            <div className='col-2 p-0'>
                <img className='img-fluid imgdl01' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="netflixtaimetuaimenetflixtuvénérenetflix" />
            </div>
        </div>
    );
};

export default Downloading;
