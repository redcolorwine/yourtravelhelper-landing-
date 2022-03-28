$(function () {




    //Задача выполнена
    //При удалении задачи используем анимацию сокрытия
    $(document).on('click', 'li.vote', function () {
        $(this).animate({
            opacity: 0.0
        }, 500, function () {
            //в консоль вывожу удаленный элемент
            console.log($(this).text() + "удален!");
            //удаляем элемент
            $(this).remove();
            //получаем локальное хранилище
            tdata = JSON.parse(localStorage.getItem('tdata'));
            //сохраняем текст удаляемого элемента
            var del = $(this).text();
            //получаем по тексту индекс элемента массива
            ind = tdata.indexOf(del);
            //Удаляем посредством функции splice 
            if (ind > -1) {
                tdata.splice(ind, 1);
                //Заного проводим инициализацию хранилища с оставшимися элементами
                localStorage.setItem('tdata', JSON.stringify(tdata));
            }
        })
    })

})