import Button from '../components/Button.js';
import '../App.css';
import '../styles/Atendimentos.css';
import { useTranslation } from 'react-i18next';

export const Atendimentos = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='works atendimentos-bg'>
        <h1 className='main-title'>{t('atendimentos.titulo')}</h1>
        <hr className='divider' />

        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>{t('atendimentos.consultas')}</h2>
            <p>{t('atendimentos.consultas_desc')}</p>
          </div>
        </div>

        <hr className='divider' />

        <div className='work'>
          <div className='info-container-1'>
            <h2 className='work-title'>{t('atendimentos.local')}</h2>
            <p>{t('atendimentos.local_desc')}</p>
          </div>
        </div>

        <hr className='divider' />
        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>{t('atendimentos.valor')}</h2>
            <ul className='vertical'>
              <li><b>{t('atendimentos.valor_desc')}</b></li>
              <li><b>{t('atendimentos.valor_desc2')}</b></li>
              <li><b>{t('atendimentos.valor_desc3')}</b></li>
            </ul>
          </div>
        </div>
        <hr className='divider' />
        <div className='btn-contato'>
          <Button path='https://sa.doct.to/c53fhgto' isExternal buttonSize={'btn--medium'} buttonStyle={'btn--primary'}>
            {t('home.btnConsulta')}
          </Button>
        </div>
      </section>
    </>
  );
}
