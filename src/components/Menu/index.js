import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

//todo componente começa com letra maíuscula
function Menu() {
    return (
        <nav className="Menu">
            <a href="/home">
                <img className="Logo" src={Logo} alt="Netflix logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;