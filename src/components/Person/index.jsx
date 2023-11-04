import { Conteiner } from './styles';

export function Person({ img, name, Intelligence, Strength, Speed, Durability, Power, Combat, invertOrder }) {

   return (
      <Conteiner>
         {invertOrder ? (
            <>
               <li>
                  <span>{Intelligence}</span>
                  <span>{Strength}</span>
                  <span>{Speed}</span>
                  <span>{Durability}</span>
                  <span>{Power}</span>
                  <span>{Combat}</span>
               </li>
               <div className='user'>
                  <img src={img} alt="" />
                  <h3>{name}</h3>
               </div>
            </>
         ) : (
            <>
               <div className='user'>
                  <img src={img} alt="" />
                  <h3>{name}</h3>
               </div>
               <li>
                  <span>{Intelligence}</span>
                  <span>{Strength}</span>
                  <span>{Speed}</span>
                  <span>{Durability}</span>
                  <span>{Power}</span>
                  <span>{Combat}</span>
               </li>
            </>
         )}
      </Conteiner>
   )
};