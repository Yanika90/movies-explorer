import React from "react"
import StudentPhoto from "../../images/student-photo.jpg"
import "./AboutMe.css"

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__box">
        <div className="about-me__text-block">
          <h3 className="about-me__name">Яна</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 32&nbsp;года</h4>
          <p className="about-me__info">
            Я&nbsp;родилась в&nbsp;городе Тирасполе, там&nbsp;же закончила
            Естественно-географический факультет ПГУ им. Т.Г. Шевченко.
            В&nbsp;2015 году переехала в&nbsp;Смоленск, где проработала
            в&nbsp;образовательной сфере 7&nbsp;лет. Сейчас я&nbsp;решила
            научиться чему-то новому и&nbsp;начала кодить. После того, как
            закончу курс по&nbsp;веб-разработке, хочу попробовать себя
            во&nbsp;фрилансе и&nbsp;полностью сменить сферу деятельности.
            У&nbsp;меня есть муж и&nbsp;собака по&nbsp;кличке Юта. Я&nbsp;люблю
            слушать музыку, а ещё увлекаюсь плаванием и&nbsp;рисованием.
          </p>
          <a
            href="https://github.com/Yanika90"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          src={StudentPhoto}
          alt="Фото студента ЯП"
          className="about-me__avatar"
        />
      </div>
    </section>
  )
}

export default AboutMe
