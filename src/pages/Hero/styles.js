import styled from "styled-components";

export const Conteiner = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 7rem;

   h1 {
      color: green;

      span {
         color: white;
      }
   }

   .users {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .6rem;

      list-style-type: none;
   }

   img {
      box-shadow: 0 0 1rem .3rem white;
   }

   .stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      p {
         font-size: 1.6rem;
         font-weight: 600;
      }
   }

   .atributs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15rem;

      .arrow-up {
            color: green;
         }

      .arrow-down {
         color: red;
      }

      svg {
         font-size: 1.5rem;
      }
   }

`;