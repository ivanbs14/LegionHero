import styled from "styled-components";

export const Container = styled.nav`
   width: 100%;
   height: 5rem;
   position: fixed;
   bottom: 0;
   left: 0;

   display: flex;
   align-items: center;
   justify-content: center;

   background-color: #ccc;

   span {
      font-size: 1.6rem;
      color: #333;
   };

  @media screen and (max-width: 430px) {
   
   };
`;