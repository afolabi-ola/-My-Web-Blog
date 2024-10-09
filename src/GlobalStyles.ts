import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 /* @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap'); */

 /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap'); */

 /* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap'); */

 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap');

  /* Add your global styles here */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  /* font-family: Dancing Script, cursive; */
  /* font-family: Roboto,sans-serif; */
  /* font-family: Open sans-serif,sans-serif; */
  /* font-family: 'Poppins', sans-serif; */

  }

  body {
    /* font-family: Dancing script, cursive; */
    /* font-family: Roboto,sans-serif; */
    /* font-family: Open sans,sans-serif; */
    /* font-family: 'Poppins', sans-serif; */
    background-color: gainsboro;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --primary: rgb(42, 60, 95);
    --secondary: rgb(0, 191, 255);
    --main: rgb(220, 220, 220);
    --light-blue: hsl(206, 94%, 87%);
    --primary-text:rgb(59, 59, 59);
    --accent:  rgb(250, 235, 215);
    --font-lg:700;
    --font-md:500;
    --font-sm:400;
  }
`;
