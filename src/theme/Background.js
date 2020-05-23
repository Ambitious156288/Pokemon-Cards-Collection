import { createGlobalStyle } from 'styled-components';
import backgroundImage from 'assets/backgroundImage.png';

const Background = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    body{ 
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${backgroundImage}) center;
        background-attachment: fixed;
    }
`;

export default Background;
