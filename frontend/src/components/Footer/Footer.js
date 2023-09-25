import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__header">
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </h3>

      <div className="footer__border-center"></div>

      <div className="footer__info">
        <p className="footer__year-production">&copy; 2023</p>
        <a
          href="https://practicum.yandex.ru"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a
          href="https://github.com/Yanika90"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  )
}

export default Footer
