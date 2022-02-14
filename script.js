
    let more = document.querySelector('.more'), //получаем доступ к кнопке, которая будет открывать модальное окно
        overlay = document.querySelector('.overlay'), // получаем доступ к самому модальному окну в вашей HTML структуре
        close = document.querySelector('.popup-close'); //получаем доступ к классу, который отвечает за крестик, закрывающий модальное окно

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; // запрещает прокрутку страницы при открытом модальном окне
    }); // подключаем к кнопке обработчик событий "клик", при клике на кнопку будет изменен стиль CSS и класс overlay станет display: block (изначально был display: none), затем подключаем анимацию к кнопке, добавив класс more-splash (сама анимация прописывается в стилях CSS) 

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    }); // этой функцией мы закрываем окно при нажатии на крестик
