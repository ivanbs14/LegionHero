import styled from 'styled-components';

export const Container = styled.nav`
   width: 100%;
   height: 6rem;
   display: flex;
   justify-content: center;
   align-items: center;
   justify-content: space-between;
   padding: 0 18rem;
   gap: 2rem;

   position: fixed;
   top: 0;
   z-index: 1;

   color: #333;
   background-color: #ccc;

   h3 {
      font-size: 2rem;
      font-weight: 600;
   }

   @media screen and (max-width: 430px) {
      
   }
`;
