let linkShortening = document.querySelector('.button-to-shorten-links');
let reductionForm = document.querySelector('.reduction-form')

linkShortening.onclick = function () {
	// 1. Создаём новый объект XMLHttpRequest()
	let xhr = new XMLHttpRequest();

	// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
	xhr.open('POST', 'api/short.php', false);//api/short.php?link= ссылка на скрипт на сервере

	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	var body = 'link=' + encodeURIComponent(reductionForm.value); //link - аргумент(параметр)
	// 3. Отсылаем запрос
	xhr.send(body);

	// 4. Если код ответа сервера не 200, то это ошибка
	if (xhr.status != 200) {
	  	// обработать ошибку
	  	alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
	} else {
		// вывести результат
		reductionForm.value = ( window.location + xhr.responseText ); // responseText -- текст ответа.
	}
}
