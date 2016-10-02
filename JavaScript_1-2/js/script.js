var a = +prompt('Введите число', '');
var b = +prompt('Введите степень, в которую желаете возвести число', '');
function pow(a, b) {
	// Основание и показатель должны быть целыми числами
	//Преобразование дробных чисел
	a = parseInt(a);
	b = parseInt(b);

	function isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	if (!isNumeric(a) || !isNumeric(b)) {
		return ("Введите корректное число");
	}
	//Исключение
	if (a === 0 && b === 0) {
		return ("Число не определено");
	}
	// Любое число, возведенное в степень 0, равно 1
	if (b == 0) {
		return 1;
	}
	//Положительная степень
	var result = 1;
	for (var i = 1; i <= Math.abs(b); i++) {
        result *= a;
    }
    //Отрицательная степень
    if (b < 0) {
        result = 1 / result;
    }
    return result;
}
console.log(pow(a, b));

// Массив для 5 имен
var arr = [];
for (var i = 0; i < 5; i++) {	
	var names = prompt('Введите любое имя', 'Например, Мария');
	arr.push(names);
}
console.log(arr);
// Имя пользователя
var userName = prompt('Пожалуйста, введите Ваше имя', '');
if (userName == '') {
	alert("Попробуйте еще раз");
}
// Проверка имени в базе данных
var index;
for (index = 0; index < arr.length; index++) {
    if(arr[index] == userName) {
    	var search = true;
    	break;
    }   
}
// Взаимодействие с пользователем
if (search) {
	alert(userName + ", Вы успешно вошли");
}
else { 
	alert('Вас нет среди зарегистрированных пользователей')
}



