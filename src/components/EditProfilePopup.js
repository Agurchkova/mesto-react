import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            name="EditProfilePopup"
            title="Редактировать профиль"
            btntext="Сохранить"
            isOpen={isOpen}
            onClose={onClose}>
            <label>
                <input
                    className="popup__input popup__input_type_name"
                    type="text"
                    placeholder="Имя"
                    name="username"
                    minLength="2"
                    maxLength="40"
                    id="input-name"
                    required />
                <span
                    className="popup__input-error"
                    id="input-name-error">
                </span>
            </label>
            <label>
                <input
                    className="popup__input popup__input_type_job"
                    type="text"
                    placeholder="Профессия"
                    name="job"
                    minLength="2"
                    maxLength="200"
                    id="input-job"
                    required />
                <span
                    className="popup__input-error"
                    id="input-job-error">
                </span>
            </label>
        </PopupWithForm >
    );
};

export default EditProfilePopup;