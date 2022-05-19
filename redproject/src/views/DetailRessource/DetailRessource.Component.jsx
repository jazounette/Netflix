import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import "./Detail.css"
const Detail = (props) => {
    const location=useLocation();
    
    return (
        <div className="Detail">
            {/* location.state.url[0] */}
            <ReactPlayer
          url={location.state.url[0]}
          className='react-player'
          playing
          controls = "true"
        //   poster={location.state.image[0]}
          width='100%'
          height='100%'
        /> 
        </div>
    );
};

export default Detail;