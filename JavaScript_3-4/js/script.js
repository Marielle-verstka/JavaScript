// Задаём отступы для body
document.body.style.padding = "24px 96px";
// Создаём сам объект
var pageTest = {
// Вводим исходные данные
	title: 'Тест по программированию',
	test: [
		{
		question: 'Вопрос №1',
		answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
		},
		{
		question: 'Вопрос №2',
		answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
		},	
		{
		question: 'Вопрос №3',
		answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
		}				
	],
	control: 'Проверить мои результаты',
	action: '#',
	createForm: function() {
		// Создаём название формы
 		var form = document.createElement('form');
		form.setAttribute('action', this.action);
		form.setAttribute('method', 'post');
		document.body.appendChild(form);
	},
	createTitle: function() {
		// Создаём название страницы
 		var h1 = document.createElement('h1');
		h1.innerHTML = this.title;
		h1.style.textAlign = "center";
		var form = document.querySelector('form');
		form.appendChild(h1);
	},
	createTest: function() {
		//Создаем сам тест
		for (var i = 0; i < this.test.length; i++) {
			// Перебор вопросов
			var form = document.querySelector('form');
			
			var fieldset = document.createElement('fieldset');
			fieldset.style.border = "none";
			fieldset.style.margin = "0";
			fieldset.style.padding = "0";
			form.appendChild(fieldset);

			var legend = document.createElement('legend');
			legend.innerHTML = i + 1 + '. ' + this.test[i].question;
			legend.style.fontSize = "24px";
			legend.style.margin = "25px 0 10px 0px";
			fieldset.appendChild(legend);

			for (var j = 0; j < this.test[i].answers.length; j++) {
			// Перебор ответов

		  		var label = document.createElement('label');
		  		label.style.display = "block";
		  		label.style.marginLeft = "25px";
		  		fieldset.appendChild(label);

				var span = document.createElement('span');
				span.innerHTML = this.test[i].answers[j];
				span.style.fontSize = '20px';
				label.appendChild(span);

				var input = document.createElement('input');
				input.type = 'checkbox';
				var x = i+1;
				var y = j+1;
				var xy = x + "" + y;
				input.setAttribute('value', xy );
				input.setAttribute('id', xy );
				label.insertBefore(input, label.children[0]);
			}

		}
	},
	createButton: function() {
		// Создаём кнопку для отправки формы
		var form = document.querySelector('form');
 		var submit = document.createElement('input');
		submit.setAttribute('type', 'submit');
		submit.setAttribute('value', this.control);
		submit.style.display = "block";
		submit.style.lineHeight = "65px";
		submit.style.margin = "50px auto";
		submit.style.padding = "0 44px";
		submit.style.backgroundColor = "#d0e2f0";
		submit.style.fontSize = '26px';
		submit.style.cursor = 'pointer';
		form.appendChild(submit);
	},
	createPageTest: function() {
		this.createForm();
		this.createTitle();
		this.createTest();
		this.createButton();
	}
}


// pageTest.createForm();
// pageTest.createTitle();
// pageTest.createTest();
// pageTest.createButton();
pageTest.createPageTest();


