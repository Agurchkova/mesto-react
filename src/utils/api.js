class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    /// проверка ответа от сервера на корректность
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    /// получение карточек с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(res => this._checkResponse(res))

    }

    /// получаем данные о пользователе
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(res => this._checkResponse(res));
    }

    /// редактирование данных о пользователе
    editUserData(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(res => this._checkResponse(res));
    }

    /// добавляем новую карточку попапом
    addItem(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => this._checkResponse(res));
    }

    /// удаляем карточку
    deleteItem(itemId) {
        return fetch(`${this._baseUrl}/cards/${itemId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._checkResponse(res));
    }

    /// редактирование аватара пользователя
    changeAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(res => this._checkResponse(res));
    }

    /// ставим лайк карточке
    setLike(itemId) {
        return fetch(`${this._baseUrl}/cards/${itemId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(res => this._checkResponse(res));
    }

    /// удаляем лайк
    deleteLike(itemId) {
        return fetch(`${this._baseUrl}/cards/${itemId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._checkResponse(res));
    }
    // поддержка лайков и дизлайков
    changeLikeCardStatus(itemId, isLiked) {
        return fetch(`${this._baseUrl}/cards/${itemId}/likes`, {
            method: `${!isLiked ? 'DELETE' : 'PUT'}`,
            headers: this._headers,
        })
            .then((res) => this._checkResponse(res));
    }

}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `ed6511d1-8679-4d0e-906b-e0ea7dcb3ddf`,
    },
});
export default api;
