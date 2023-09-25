import React from "react"
import "../InfoToolTip/InfoToolTip.css"

function InfoToolTipUpdate(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isUpdate ? (
          <>
            <p className="popup__signup-title">Data edited successfully!</p>
          </>
        ) : (
          <>
            <p className="popup__signup-title">
              Something went wrong. Try again!
            </p>
          </>
        )}
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  )
}

export default InfoToolTipUpdate
