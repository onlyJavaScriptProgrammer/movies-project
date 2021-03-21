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
          ul = document.querySelector('.promo__interactive-list'),
          addFilm = document.querySelector('.adding__input'),
          addForm = document.querySelector('.add'),
          checkBox = document.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let newFilm = addFilm.value;
        
        if(newFilm){

            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            
            createMovieList(movieDB.movies, ul);
        }

        
        event.target.reset();
    });
    
    const deleteAdv = (arg) => {
        arg.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {

        let favorite = checkBox.checked;

        parent.innerHTML = '';
        sortArr(films);

        films.forEach((item, index) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1} ${item} 
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((item, index) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(index, 1);

                createMovieList(films, parent);
            });
        });

        if(favorite) {
            console.log('Добавляем любимый фильм');
        }

    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, ul);
    
});

