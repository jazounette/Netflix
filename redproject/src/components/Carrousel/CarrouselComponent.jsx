import React, { useEffect, useState } from 'react';
import './Carrousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Carrousel = (props) => {
    var[InitLoad,setInitLoad]=useState(true);
    var [indexCarrou,setIndexCarrou]=useState(0);
    var [list,setlist]=useState([]);
   
    useEffect(()=>{
       setlist([...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)]);       
    },[InitLoad]);

function Next(){
        var indexmax=Math.round(props.ListRessource.length/5)-1;                  
        if(indexmax==indexCarrou){
                indexCarrou=0;
                setIndexCarrou(0);
                 setlist([...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)]);
                // list=[...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)];
        }else{
                indexCarrou++;
                setIndexCarrou( indexCarrou);
               // list=[...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)];
               console.log(indexCarrou)
            setlist([...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)]);
                    console.log(list);
         }
}; 

function Prev(){
    var indexmin=0;   
    var indexmax=Math.round(props.ListRessource.length/5)-1;         
    if(indexCarrou==0){
            indexCarrou=indexmax;
            setIndexCarrou(indexmax);
             setlist([...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)]);
            // list=[...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)];
    }else{
            indexCarrou--;
            setIndexCarrou( indexCarrou);
           // list=[...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)];
           console.log(indexCarrou)
        setlist([...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)]);
                console.log(list);
    //         setlist([...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)]);
    //         list=[...props.ListRessource.slice(indexCarrou*5,(indexCarrou+1)*5)];
    }
} ;

    return (
        <div className='CarrouselElt'>
            <h3 className="CarrouTitle">{props.title}</h3>
            <div className='CarrouselContainer'>
                {[...list].map((elt,index)=>{              
                return(<div className='Ressource' key={index} >
                    <img src={elt.image[0]} width="100%" height="100%"/>
                    <div className='hoverFilm'>                       
                        <h3>{elt.nomRessource}</h3>
                        <p>{elt.description}</p>
                    </div>
                </div>);
            })}
            </div>
            <button className='Prev' onClick={Prev}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <button className='Next' onClick={Next}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    );
};

export default Carrousel;