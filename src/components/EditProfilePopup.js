import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onLoading, onCloseEsc, onCloseOverlay }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (isOpen) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, isOpen]);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="EditProfilePopup"
            title="Редактировать профиль"
            btnText="Сохранить"
            loadingTxt="Сохранение..."
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onLoading={onLoading}
            onCloseEsc={onCloseEsc}
            onCloseOverlay={onCloseOverlay}
        >
            <label>
                <input
                    className="popup__input popup__input_type_name"
                    type="text"
                    placeholder="Имя"
                    name="username"
                    minLength="2"
                    maxLength="40"
                    id="input-name"
                    required
                    value={name}
                    onChange={handleNameChange}
                />
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
                    required
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <span
                    className="popup__input-error"
                    id="input-job-error">
                </span>
            </label>
        </PopupWithForm >
    );
};

export default EditProfilePopup;