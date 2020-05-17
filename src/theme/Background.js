import { createGlobalStyle } from 'styled-components';
import img from 'assets/img.jpg';

const Background = createGlobalStyle`
    body{ 
        background: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${img}) center;
    }
`;

export default Background;
