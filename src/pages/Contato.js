import '../App.css';
import '../styles/Contato.css';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button.js'; // Componente de botão reutilizado

export const Contato = () => {
  const { t } = useTranslation();

  return (
    <div className="contato-box">
      <div className='contato'>
        <h1>{t('contato.titulo')}</h1>
        <p className='contato-subtitulo'>{t('contato.subtitulo')}</p>

        <div className="contato-botoes-container">
          {/* Botão para agendamento no Doctoralia */}
          <Button
            path='https://sa.doct.to/c53fhgto'
            isExternal
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            <i className="fa-solid fa-calendar-check"></i>
            Agendar (Doctoralia)
          </Button>

          {/* Botão para contato via WhatsApp */}
          <Button
            path='https://wa.me/5531988590896' // Use o número correto aqui
            isExternal
            buttonStyle='btn--secondary'
            buttonSize='btn--large'
          >
            <i className="fa-brands fa-whatsapp"></i>
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};