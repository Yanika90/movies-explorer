import React from "react"
import "./AboutProject.css"

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <div className="about-project__box">
        <h2 className="about-project__header">О проекте</h2>
        <ul className="about-project__container">
          <li className="about-project__info">
            <h3 className="about-project__info-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__info">
            <h3 className="about-project__info-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="about-project__timeline">
          <h3 className="about-project__timeline-title about-project__timeline-title_theme_accent">
            1 неделя
          </h3>
          <h3 className="about-project__timeline-title">4 недели</h3>
          <p className="about-project__timeline-work">Back-end</p>
          <p className="about-project__timeline-work">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject
