import React from "react"
import "./Portfolio.css"
import arrow from "../../images/arrow.svg"

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <nav className="portfolio__elements">
        <a
          href="https://github.com/Yanika90/how-to-learn.git"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">Статичный сайт</p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="Стрелка для ссылки на страницу гита"
          />
        </a>
        <a
          href="https://github.com/Yanika90/russian-travel.git"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">Адаптивный сайт</p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="Стрелка для ссылки на страницу гита"
          />
        </a>
        <a
          href="https://github.com/Yanika90/react-mesto-api-full-gha.git"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">Одностраничное приложение</p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="Стрелка для ссылки и перехода по адресу"
          />
        </a>
      </nav>
    </section>
  )
}

export default Portfolio
