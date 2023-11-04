import { Conteiner } from './styles';

import { GiPointySword } from "react-icons/gi";

export function Card({ title, pts, person, borderColor, onClick, selected }) {
   const cardStyle = {
      borderColor,
      transform: selected ? 'scale(1.1)' : 'scale(1.0)',
      transition: 'transform 0.2s',
   };

   return (
      <Conteiner borderColor={borderColor} style={cardStyle} onClick={onClick}>
         <img src={person} alt="" />
         <h1>{title}</h1>
         <div className='points'>
            <GiPointySword />
            <p>{pts}</p>
         </div>
      </Conteiner>
   )
};