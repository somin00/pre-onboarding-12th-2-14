import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    font-family: Pretendard;
  }
  
  body{
    width: 500px;
    height: 742px;
    margin: 20px auto;
    font-family: Pretendard;
    display: flex;
    justify-content: center;
    border: 3px solid black;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: black;
  }
`;
