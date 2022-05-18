import React, { useEffect, useState } from 'react';
import Carrousel from '../../components/Carrousel/CarrouselComponent';

import { get } from '../../service/ApiNetflix';
import './AccueilRessource.css'
const AccueilRessource = () => {
    const [firstLoad,setFirstLoad]=useState(true)
        var [listHorreur,setHorreur]=useState([])
        var [listSF,setSF]=useState([])
        var [listAction,setAction]=useState([])
    useEffect(() => {
       get("Accueil/Ressource/Horreur").then((res)=>{
             setHorreur([...res.data]);
        })
      },[firstLoad]);
      useEffect(()=>{
        get("Accueil/Ressource/SF").then((res)=>{
            setSF([...res.data]);
      })},[firstLoad]); 
      useEffect(()=>{
        get("Accueil/Ressource/Action").then((res)=>{
            setAction([...res.data]);
      })},[firstLoad]);

    return (
        <div>
             <div className="Entete">
                <article>
                    <div>
                        <h3 className='bottomSpace'>Titre Film</h3>
                        <p className='Description bottomSpace'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolor non quisquam eveniet, odit, nesciunt cumque, ipsum architecto sed natus sunt deserunt labore dolorem unde velit esse magni ipsam provident!</p>
                        <p className='categorieRessource bottomSpace'>categorie film</p>
                    </div>
                </article>
                {/* <img src="./public/logo192.png" /> */}
                 <div className="degrade"></div>
                 <div className="fond"></div>
                
            </div>
             <Carrousel  ListRessource={listHorreur} title="Horreur" /> 
             <Carrousel ListRessource={listSF}  title="SF"/> 
             <Carrousel ListRessource={listAction}  title="Action"/> 
                     
        </div>
    );
};

export default AccueilRessource;