import React from "react";

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button
                    type="button"
                    className="popup__close-button button"
                    aria-label="Закрыть окно"
                    onClick={props.onClose}>
                </button>
                <form
                    className="popup__form"
                    name={`${props.name}`}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                </form>
            </div>
        </div>
    );
};

export default PopupWithForm;