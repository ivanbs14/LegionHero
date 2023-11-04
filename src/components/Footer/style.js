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

   background-color: red;

   span {
      font-size: 1.6rem;
      color: white;
   };

  @media screen and (max-width: 430px) {
   
   };
`;