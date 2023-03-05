import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            name="AddPlacePopup"
            title="Новое место"
            btntext="Создать"
            isOpen={isOpen}
            onClose={onClose}>
            <label>
                <input
                    className="popup__input popup__input_type_nameAdd"
                    required
                    type="text"
                    placeholder="Название"
                    name="name"
                    minLength="2"
                    maxLength="30"
                    id="input-title" />
                <span
                    className="popup__input-error"
                    id="input-title-error">
                </span>
            </label>
            <label>
                <input
                    className="popup__input popup__input_type_urlAdd"
                    type="url"
                    placeholder="Ссылка на картинку"
                    name="link"
                    id="input-url"
                    required />
                <span
                    className="popup__input-error"
                    id="input-url-error">
                </span>
            </label>
        </PopupWithForm>

    );
};

export default AddPlacePopup;