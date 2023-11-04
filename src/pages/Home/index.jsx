import { useState, useEffect } from 'react';
import { Conteiner } from './styles';

import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';

import { Card } from '../../components/Card';

export function Home() {
   const [metahumans, setMetahumans] = useState([]);
   const [selectedCardIds, setSelectedCardIds] = useState([]);

   const navigate = useNavigate();

   useEffect(() => {
      async function fetchHero() {
         const response = await api.get("/");
         setMetahumans(response.data)

         console.log(response.data);
      }
      
      fetchHero();
   }, []);

   useEffect(() => {
      if (selectedCardIds.length === 2) {
         const ids = selectedCardIds.join(',');
         navigate(`/hero/${ids}`);
      }
   }, [selectedCardIds]);

   const handleCardClick = (id) => {
      if (selectedCardIds.includes(id)) {
         setSelectedCardIds(selectedCardIds.filter(cardId => cardId !== id));
      } else {
         setSelectedCardIds([...selectedCardIds, id]);
      }
   };

   return (
      <Conteiner>
         {
            metahumans && metahumans.map(metahuman => (    
               <li key={String(metahuman.id)}>
                     <Card 
                        idHero={metahuman.id}
                        title={metahuman.name}
                        pts={metahuman.powerstats.power}
                        person={metahuman.images.sm}
                        borderColor={metahuman.appearance.eyeColor === "-" ? "gray" : metahuman.appearance.eyeColor}
                        onClick={() => handleCardClick(metahuman.id)}
                        selected={selectedCardIds.includes(metahuman.id)}
                     />
               </li>
            ))
         }
      </Conteiner>
   )
};