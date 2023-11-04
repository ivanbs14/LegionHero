import styled from "styled-components";

export const Conteiner = styled.div`
   width: 100%;
   
   .legion {
      height: 100vh;
      margin: 8rem 15rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.5rem;
      flex-wrap: wrap;
   
      list-style-type: none;
      overflow-y: auto;

      &::-webkit-scrollbar {
         width: 12px;
      }
   
      &::-webkit-scrollbar-thumb {
         background-color: #ccc;
         border-radius: 6px;
         height: 100px;
      }
   }
`;