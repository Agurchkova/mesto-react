import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading, onCloseEsc, onCloseOverlay }) {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        if (isOpen) {
            setTitle('');
            setLink('');
        }
    }, [isOpen])

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleLinkChange(event) {
        setLink(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        onAddPlace({
            name: title,
            link: link
        });
    };

    return (
        <PopupWithForm
            name="AddPlacePopup"
            title="Новое место"
            btnText="Создать"
            loadingTxt="Добавление..."
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onLoading={onLoading}
            onCloseEsc={onCloseEsc}
            onCloseOverlay={onCloseOverlay}
        >
            <label>
                <input
                    className="popup__input popup__input_type_nameAdd"
                    required
                    type="text"
                    placeholder="Название"
                    name="name"
                    minLength="2"
                    maxLength="30"
                    id="input-title"
                    onChange={handleTitleChange} />
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
                    required
                    onChange={handleLinkChange} />
                <span
                    className="popup__input-error"
                    id="input-url-error">
                </span>
            </label>
        </PopupWithForm>
    );
};

export default AddPlacePopup;