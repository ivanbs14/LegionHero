import styled from "styled-components";

export const Conteiner = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 5rem;

   .user {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
         width: 22rem;
         margin-bottom: 1.5rem;
      }
   
      h3 {
         font-size: 2rem;
         font-weight: 600;
      }
   }


   li {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      span {
         font-size: 1.6rem;
      }
   }
`;