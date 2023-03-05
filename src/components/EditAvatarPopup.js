import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            name="EditAvatarPopup"
            title="Обновить аватар"
            btntext="Сохранить"
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
        </PopupWithForm >
    );
};

export default EditAvatarPopup;