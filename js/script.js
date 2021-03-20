/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          bg = document.querySelector('.promo__bg'),
          ul = document.querySelector('.promo__interactive-list');

    adv.forEach(item => {
        item.remove();
    });

    genre.textContent = 'драма';

    bg.style.backgroundImage = 'url("img/bg.jpg")';

    ul.innerHTML = '';

    movieDB.movies.sort();

    movieDB.movies.forEach((item, index) => {
        ul.innerHTML += `
        <li class="promo__interactive-item">${index + 1}.${item} 
            <div class="delete"></div>
        </li>`;
    });

});

