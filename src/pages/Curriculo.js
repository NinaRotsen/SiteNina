import '../App.css';
import '../styles/Curriculo.css'; // Você pode renomear para Formacao.css se preferir
import { useTranslation } from 'react-i18next';

export const Curriculo = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='formacao-bg'>
        <h1 className='main-title'>{t('formacao.titulo')}</h1>
        <hr className='divider' />

        {/* Seção de Formação Acadêmica */}
        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>{t('formacao.academica_titulo')}</h2>
            <ul className='vertical'>
              <li>
                <b>{t('formacao.academica_curso1')}</b>
                <p>{t('formacao.academica_instituicao1')}</p>
              </li>
              <li>
                <b>{t('formacao.academica_curso2')}</b>
                <p>{t('formacao.academica_instituicao2')}</p>
              </li>
              <li>
                <b>{t('formacao.academica_curso3')}</b>
                <p>{t('formacao.academica_instituicao3')}</p>
              </li>
            </ul>
          </div>
        </div>

        <hr className='divider' />

        {/* Seção de Experiência Profissional */}
        <div className='work'>
          <div className='info-container-1'>
            <h2 className='work-title'>{t('formacao.experiencia_titulo')}</h2>
            <ul className='vertical'>
              <li>
                <b>{t('formacao.experiencia_cargo4')}</b>
                <p>{t('formacao.experiencia_local4')}</p>
                <p>{t('formacao.experiencia_desc4')}</p>
              </li>
              <li>
                <b>{t('formacao.experiencia_cargo3')}</b>
                <p>{t('formacao.experiencia_local3')}</p>
                <p>{t('formacao.experiencia_desc3')}</p>
              </li>
              <li>
                <b>{t('formacao.experiencia_cargo1')}</b>
                <p>{t('formacao.experiencia_local1')}</p>
                <p>{t('formacao.experiencia_desc1')}</p>
              </li>
              <li>
                <b>{t('formacao.experiencia_cargo6')}</b>
                <p>{t('formacao.experiencia_local6')}</p>
                <p>{t('formacao.experiencia_desc6')}</p>
              </li>
              <li>
                <b>{t('formacao.experiencia_cargo7')}</b>
                <p>{t('formacao.experiencia_local7')}</p>
                <p>{t('formacao.experiencia_desc7')}</p>
              </li>
            </ul>
          </div>
        </div>

        <hr className='divider' />

        {/* Seção de Cursos e Qualificações */}
        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>{t('formacao.qualificacoes_titulo')}</h2>
            <ul className='vertical'>
              <li><b>{t('formacao.qualificacao1')}</b></li>
              <li><b>{t('formacao.qualificacao2')}</b></li>
              <li><b>{t('formacao.qualificacao3')}</b></li>
              <li><b>{t('formacao.qualificacao4')}</b></li>
              <li><b>{t('formacao.qualificacao5')}</b></li>
            </ul>
          </div>
        </div>

        <hr className='divider' />

        {/* Seção de Cursos e Qualificações */}
        <div className='work'>
          <div className='info-container-1'>
            <h2 className='work-title'>{t('formacao.publicacoes_titulo')}</h2>
            <ul className='vertical'>
              <li>{t('formacao.publicacao_1')}</li>
              <li>{t('formacao.publicacao_2')}</li>
              <li>{t('formacao.publicacao_3')}</li>
              <li>{t('formacao.publicacao_4')}</li>
              <li>{t('formacao.publicacao_5')}</li>
              <li>{t('formacao.publicacao_6')}</li>
              <li>{t('formacao.publicacao_7')}</li>
              <li>{t('formacao.publicacao_8')}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}