import '../App.css';
import '../styles/Home.css';
import React, { useState, useEffect } from 'react';
import Logo from '../components/images/nina-banner.jpeg';
import ProfessionalFoto from '../components/images/nina-profissional.jpeg';
import Button from '../components/Button.js';
import { useTranslation } from 'react-i18next';

export const Home = () => {
    const [showLogo, setShowLogo] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='main-box'>
                <img src={Logo} alt='Logo' className={`logo-main-box ${showLogo ? 'show' : ''}`} />
            </div>
            <h1>{t('home.sobre')}</h1>
            <h2>{t('home.crm')}</h2>
            <section className='about-container'>
                <div className='side-text'>
                    <p>{t('home.descricao')}</p>
                    <p>{t('home.descricao2')}</p>
                    <p>{t('home.descricao3')}</p>
                </div>

                <div className='professional-image-box'>
                    <img src={ProfessionalFoto} alt='Nina Rotsen' className='professional-image' />
                </div>
            </section>
            <div className='btn-contato'>
                <Button path='https://sa.doct.to/c53fhgto' isExternal buttonSize={'btn--medium'} buttonStyle={'btn--primary'}>
                    {t('home.btnConsulta')}
                </Button>
            </div>         
        </>
    );
};
