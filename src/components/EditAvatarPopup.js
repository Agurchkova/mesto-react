import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            name="EditAvatarPopup"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}>
            <label>
                <input
                    className="popup__input popup__input_type_url"
                    type="url"
                    placeholder="Ссылка на картинку"
                    name="avatar"
                    id="input-avatar"
                    required />
                <span
                    className="popup__input-error"
                    id="input-avatar-error">
                </span>
            </label>
            <button
                className="popup__save-button popup__save-button_disabled button"
                type="submit">
                Сохранить
            </button>
        </PopupWithForm >
    );
};

export default EditAvatarPopup;