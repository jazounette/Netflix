import React from 'react';
import { Accordion } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/FAQ.css';

const FAQ = () => {
    const FACul = [ { id:"0", quest:"Netflix, qu'est-ce que c'est?", rep: "Netflix est un service de streaming qui propose une vaste sélection de séries TV, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet. Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries TV chaque semaine, il y en a pour tous les goûts !" },
    { id:"1", quest:"Combien coûte Netflix?", rep: "Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les forfaits vont de 8,99 € à 17,99 € par mois. Pas de contrat ni de frais supplémentaires." },
    { id:"2", quest:"Où puis-je regarder Netflix?", rep: "Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu. Vous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous." },
    { id:"3", quest:"Comment puis-je annuler mon forfait?", rep: "Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment." },
    { id:"4", quest:"Que puis-je regarder sur Netflix?", rep: "Netflix propose un vaste catalogue comprenant notamment des longs métrages, des documentaires, des séries TV, des animes et des programmes originaux Netflix primés. Regardez Netflix à volonté, quand vous le voulez." },
    { id:"5", quest:"Est-ce que Netflix est adapté aux enfants?", rep: "Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille. Les profils Enfants comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques." }  ]


    return (
        <Accordion defaultActiveKey="0">
          {FACul.map((val, clé) => (
            <Accordion.Item eventKey={val.id} key={clé}>
              <Accordion.Header>{val.quest}</Accordion.Header>
              <Accordion.Body className='verchuren'>{val.rep}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
    );
};

export default FAQ;


