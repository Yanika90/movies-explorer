import React from 'react';
import { Link } from 'react-router-dom';
import './DataAccessForm.css';
import logo from '../../images/logo.svg';

function DataAccessForm({
  linkText,
  link,
  children,
  title,
  buttonText,
  registrMessage,
  isLoading,
  isDisablButton,
  onSubmit
}) {
  return (
    <main>
      <section className='form'>
        <Link to='/' className='logo'>
          <img src={logo} alt='Логотип сайта по поиску фильмов' />
        </Link>
        <h1 className='form__title'>{title}</h1>
        <form className='forma' id='form' onSubmit={onSubmit} noValidate>
          {children}

          <button
            className={
              isDisablButton || isLoading
                ? 'form__button-save form__button-save_inactive'
                : 'form__button-save'
            }
            disabled={isDisablButton ? true : false}
            type='submit'
          >
            {buttonText}
          </button>
        </form>
        <p className='form__text'>
          {registrMessage}
          <Link to={link} className='form__link'>
            {linkText}
          </Link>
        </p>
      </section>
    </main>
  );
}

export default DataAccessForm;
