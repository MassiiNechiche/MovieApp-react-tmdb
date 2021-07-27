import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Footer.styles';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/logo.png';


const Footer = () => {
    return ( 
        <Wrapper>
            <Content>
                <span> <i className='fas fa-barcode'> </i>  2021 - This website is powered by TMDB, Built with ReactJS , React hooks, Styled-components </span>


            </Content>
        </Wrapper>
     );
}
 
export default Footer;