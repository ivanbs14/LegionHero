import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Conteiner } from './styles';

import { api } from "../../services/api";

import { ImArrowUp } from "react-icons/im"
import { ImArrowDown } from "react-icons/im"

import { Person } from '../../components/Person';

export function Hero() {
   const { ids } = useParams();

   const params = useParams();
   const navigate = useNavigate();

   const [heroes, setHeroes] = useState([]);
   const [winner, setWinner] = useState(null);

   // Função para calcular a média geral de poder
   const calculateOverallPower = (hero) => {
      return (
         (hero.powerstats.intelligence +
         hero.powerstats.strength +
         hero.powerstats.speed +
         hero.powerstats.durability +
         hero.powerstats.power +
         hero.powerstats.combat) / 6
      );
   };

   useEffect(() => {
      async function fetchAllHeroes() {
         try {
            const response = await api.get("/");
            const allHeroes = response.data;

            if (ids) {
               const idArray = ids.split(',').map(id => parseInt(id, 10));

               // Filtrar os heróis com base nos IDs
               const selectedHeroes = allHeroes.filter(hero => idArray.includes(hero.id));

               setHeroes(selectedHeroes);
               
               // Calcular as médias gerais de poder para os heróis
               const hero1Power = calculateOverallPower(selectedHeroes[0]);
               const hero2Power = calculateOverallPower(selectedHeroes[1]);
   
               // Determinar o vencedor com base nas médias de poder
               if (hero1Power > hero2Power) {
                  setWinner(selectedHeroes[0]);
               } else if (hero1Power < hero2Power) {
                  setWinner(selectedHeroes[1]);
               } else {
                  setWinner(null); // Empate
               }
            }


         } catch (error) {
            console.error('Erro ao consultar a API', error);
         }
      }

      fetchAllHeroes();
   }, [ids]);

   const renderAttributeComparison = (attributeName) => {
      const hero1Value = heroes[0].powerstats[attributeName];
      const hero2Value = heroes[1].powerstats[attributeName];

      return (
         <div className='atributs'>
            {hero1Value > hero2Value ? <ImArrowUp className="arrow-up"/> : <ImArrowDown className="arrow-down"/>}
            <p>{attributeName}</p>
            {hero1Value < hero2Value ? <ImArrowUp className="arrow-up"/> : <ImArrowDown className="arrow-down"/>}
         </div>
      );
   };

   return (
      <Conteiner>
         <h1> Winner is : <span>{winner ? winner.name : "user"}</span> </h1>
         <div className='users'>
         {heroes.length >= 2 ? (
               <>
                  <Person className="test"
                     img={heroes[0].images.sm}
                     name={heroes[0].name}
                     Intelligence={heroes[0].powerstats.intelligence}
                     Strength={heroes[0].powerstats.strength}
                     Speed={heroes[0].powerstats.speed}
                     Durability={heroes[0].powerstats.durability}
                     Power={heroes[0].powerstats.power}
                     Combat={heroes[0].powerstats.combat}
                  />

                  <li className='stats'>
                     {renderAttributeComparison('intelligence')}
                     {renderAttributeComparison('strength')}
                     {renderAttributeComparison('speed')}
                     {renderAttributeComparison('durability')}
                     {renderAttributeComparison('power')}
                     {renderAttributeComparison('combat')}
                  </li>

                  <Person 
                     invertOrder={true}
                     img={heroes[1].images.sm}
                     name={heroes[1].name}
                     Intelligence={heroes[1].powerstats.intelligence}
                     Strength={heroes[1].powerstats.strength}
                     Speed={heroes[1].powerstats.speed}
                     Durability={heroes[1].powerstats.durability}
                     Power={heroes[1].powerstats.power}
                     Combat={heroes[1].powerstats.combat}
                  />
               </>
            ) : null}
         </div>
      </Conteiner>
   )
};