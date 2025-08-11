import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import LogoCantoPagina from './images/nr_logo_verde.jpeg';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button.js'; // NOVO: Importar o componente Button

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={LogoCantoPagina} alt='Henrique Rotsen' width='100%' height='auto' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* ... seus itens de menu (li) continuam aqui ... */}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/atendimentos' className='nav-links' onClick={closeMobileMenu}>
                {t('header.1')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/formacao-experiencia' className='nav-links' onClick={closeMobileMenu}>
                {t('header.2')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='https://fertilaudo.com.br' target="_blank" rel="noopener noreferrer" className='nav-links' onClick={closeMobileMenu}>
                {t('header.4')}
                &nbsp; {/* Espaço para separar o texto do ícone */}
                &nbsp; {/* Espaço para separar o texto do ícone */}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contato' className='nav-links' onClick={closeMobileMenu}>
                {t('header.3')}
              </Link>
            </li>
            <li className='nav-item language-selector-mobile'>
              <select onChange={handleLanguageChange} value={i18n.language}>
                <option value='pt'>🇧🇷</option>
                <option value='en'>🇺🇸</option>
              </select>
            </li>
          </ul>

          <div className='language-selector desktop-only'>
            <select onChange={handleLanguageChange} value={i18n.language}>
              <option value='pt'>🇧🇷</option>
              <option value='en'>🇺🇸</option>
            </select>
          </div>

          {/* NOVO: Botão de agendamento adicionado aqui */}
          <div className='btn-header'>
            <Button path='https://sa.doct.to/c53fhgto' isExternal buttonSize={'btn--medium'} buttonStyle={'btn--secondary'}>
              {t('home.btnConsulta')}
            </Button>
          </div>
        </div>
        <hr className='nav-hr' />
      </nav>
    </>
  );
}

export default Header;