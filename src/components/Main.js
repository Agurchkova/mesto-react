import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card"

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getInitialCards(), api.getUserInfo()])
            .then(([cards, userData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(
                    cards.map((item) => ({
                        id: item._id,
                        link: item.link,
                        name: item.name,
                        alt: item.name,
                        likes: item.likes
                    }))
                );
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <main className="page__content">
            <section className="profile">
                <img
                    className="profile__avatar"
                    style={{ backgroundImage: `url(${userAvatar})` }}
                    src={userAvatar}
                    alt="Аватар профиля" />
                <button
                    className="profile__avatar-edit-button"
                    onClick={onEditAvatar}>
                </button>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <p className="profile__subtitle">{userDescription}</p>
                    <button
                        type="button"
                        className="profile__edit-button button"
                        aria-label="редактировать профиль"
                        onClick={onEditProfile}>
                    </button>
                </div>
                <button
                    type="button"
                    className="profile__add-button button"
                    aria-label="добавить фотографию"
                    onClick={onAddPlace}>
                </button>
            </section>
            <section className="photo-gallery" aria-label="фото-галерея">
                <ul className="photo-gallery__items">
                    {cards.map((card) => {
                        return (
                            <Card key={card.id}
                                card={card}
                                onCardClick={onCardClick} />
                        )
                    }
                    )}
                </ul>
            </section>
        </main>
    );
}


export default Main;
