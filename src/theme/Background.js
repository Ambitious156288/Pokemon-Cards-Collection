import { createGlobalStyle } from 'styled-components';
import img from 'assets/img.jpg';

const Background = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    body{ 
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${img}) center;
    }
`;

export default Background;
