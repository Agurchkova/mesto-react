import React from "react";

function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <figure className="photo-gallery__container">
            <button
                type="button"
                className="photo-gallery__trash-button button"
                aria-label="Удалить">
            </button>
            <button
                className="photo-gallery__item-button"
                type="button"
                aria-label="Увеличение картинки">
                <img
                    className="photo-gallery__item"
                    src={card.link}
                    alt={card.name}
                    onClick={handleClick} />
            </button>
            <figcaption className="photo-gallery__description">
                <h2 className="photo-gallery__title">{card.name}</h2>
                <div className="photo-gallery__likes-area">
                    <button
                        type="button"
                        className="photo-gallery__like-button button"
                        aria-label="Добавить в избранное">
                    </button>
                    <span className="photo-gallery__like-counter">{card.likes.length}</span>
                </div>
            </figcaption>
        </figure>
    );
};

export default Card;