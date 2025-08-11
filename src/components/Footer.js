import React from 'react';
import { getYear } from 'date-fns';
import '../styles/Footer.css'
import { useTranslation } from 'react-i18next';


function Footer() {
  const anoAtual = getYear(new Date());
  const { t } = useTranslation();
  
  return (
    <>
      <div className='footer-container'>
        <div className='social-medias'>
          @draninarotsen<a href='https://www.instagram.com/draninarotsen/' target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"/>
          </a>
          <a href='https://www.linkedin.com/in/nina-rotsen-5389232a0/' target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin" />
          </a>
          <a href='https://wa.me/5561999700896?text=Ol%c3%a1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Nina.' target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp" />
          </a>
        </div>
        <div className='copyright'>
        {t('footer.texto1')} - {anoAtual} {t('footer.texto2')} ©
        </div>
      </div>
    </>
  );
}

export default Footer;