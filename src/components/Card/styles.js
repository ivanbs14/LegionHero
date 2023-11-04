import styled from "styled-components";

export const Conteiner = styled.div`
   border: 1px solid ${props => props.borderColor}; 
   border-radius: 0.5rem;
   width: 17rem;
   height: 25rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: .5rem;

   background: linear-gradient(135deg, rgba(255, 102, 0, 0.3), rgba(0, 153, 204, 0.2));
   background-size: cover;
   background-attachment: fixed;
   background-repeat: no-repeat;

   img {
      width: 12rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      box-shadow: 0 0 1rem .4rem ${props => props.borderColor};
   }

   h1 {
      font-size: 1.4rem;
   }
   
   .points {
      display: flex;
      gap: 1rem;

      font-size: 1.4rem;
   }
`;