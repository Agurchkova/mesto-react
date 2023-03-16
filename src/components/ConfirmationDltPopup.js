import { useEffect } from "react";

function ConfirmationDltPopup({ isOpen, onClose, card, onSubmit, onLoading, onCloseEsc, onCloseOverlay }) {

    function handleConfirmiation(event) {
        event.preventDefault();
        onSubmit(card);
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', onCloseEsc);
        } else {
            document.removeEventListener('keydown', onCloseEsc);
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', onCloseOverlay);
        } else {
            document.removeEventListener('mousedown', onCloseOverlay);
        }
    }, [isOpen])

    return (
        <div className={`popup popup_type_confirmation ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button
                    type="button"
                    className="popup__close-button button"
                    aria-label="Закрыть окно"
                    onClick={onClose}>
                </button>
                <form
                    className="popup__form"
                    name="confirmationForm"
                    action="#"
                    onSubmit={handleConfirmiation}>
                    <h2 className="popup__title">Вы уверены?</h2>
                    <button
                        className="popup__save-button button"
                        type="submit">
                        {onLoading ? "Удаление..." : "Да"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ConfirmationDltPopup;