import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/logo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            
            <Link to='/'><LogoImg src={RMDBLogo} alt='rmdb-logo' /></Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;