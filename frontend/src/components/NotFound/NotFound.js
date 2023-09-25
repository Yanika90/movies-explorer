import React from "react"
import { useNavigate } from "react-router-dom"

import "./NotFound.css"

function NotFound() {
  const navigate = useNavigate()

  function hundlePath() {
    navigate(-2)
  }

  return (
    <main>
      <section className="page-not-found">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__subtitle">Страница не найдена</p>
        <button className="page-not-found__back-link" onClick={hundlePath}>
          Назад
        </button>
      </section>
    </main>
  )
}

export default NotFound
