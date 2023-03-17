import React, { useEffect } from "react";

function PopupWithForm(props) {

    useEffect(() => {
        if (props.isOpen) {
            document.addEventListener('keydown', props.onCloseEsc);
        } else {
            document.removeEventListener('keydown', props.onCloseEsc);
        }
    }, [props.isOpen])

    useEffect(() => {
        if (props.isOpen) {
            document.addEventListener('mousedown', props.onCloseOverlay);
        } else {
            document.removeEventListener('mousedown', props.onCloseOverlay);
        }
    }, [props.isOpen])

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
                    name={`${props.name}`}
                    onSubmit={props.onSubmit}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button
                        className={`popup__save-button button`}
                        type="submit">
                        {props.onLoading ? props.loadingTxt : props.btnText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PopupWithForm;

