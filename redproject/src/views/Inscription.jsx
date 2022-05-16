import React from 'react';
import { useLocation } from 'react-router-dom';

const Inscription = () => {
    const location = useLocation();

    return (
        <div>
            <p>remplacer ici la page pour les inscription (simon et tekra)</p>
            <p>courriel: {location.state.lecouriel}</p>
        </div>
    );
};

export default Inscription;


