import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
        
    }

    body{
        overflow-x: hidden;
    }

    p{
        font-size: calc(0.68rem + 1vw);
        font-family: 'Josefin Sans', sans-serif;
    }

    h1{
        font-size: calc(1.1rem + 1vw)
    }

    h2{
        font-size: calc(1rem + 1vw);
        font-family: 'Josefin Sans', sans-serif;
    }

    h3{
        font-size: calc(0.8rem + 1vw);
        font-family: 'Josefin Sans', sans-serif;
    }

    h4{
        font-size: calc(0.37rem + 1vw);
        font-family: 'Josefin Sans', sans-serif;
    }
    a{
        text-decoration: none;
        color: white
    }

    .btn{
        font-size: calc(0.3rem + 1vw);
        border: none;
        padding: 0.8rem  calc(1.5rem + 1vw);
        cursor: pointer;
        /* background: linear-gradient(45deg, #f48c06, #d00000); */
        background: black;
        color: white;
        font-family: 'Josefin Sans', sans-serif;
    }


`

