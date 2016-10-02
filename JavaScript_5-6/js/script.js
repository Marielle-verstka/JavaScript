
// // // var elem = document.querySelector('h1');
// // // // elem.onclick = function() {
// // // // 	pageTest.createTest();
// // // // }
// // // // или
// // // // elem.addEventListener('click', function() {
// // // // 	pageTest.createTest();
// // // // })
// // // // or
// // // function callback() {
// // // 	pageTest.createTest();
// // // };
// // // elem.addEventListener('click', callback);
// // // //delete callback
// // // elem.removeEventListener('click', callback);

// // // function handler(event) {
// // // 	console.log('event:', event.keyCode);
// // // 	if (event.keyCode === 13) {
// // // 		alert("Enter is pressed");
// // // 	}
// // // }
// // // window.addEventListener('keydown', handler);

// // // function handler1(event) {
// // // 	console.log('event x y', event.clientX, event.clientY);
// // // }
// // // window.addEventListener('click', handler1);

// // // function handlerPreventDefault(event) {
// // // 	event.preventDefault();
// // // }
// // // link.addEventListener('click', handlerPreventDefault);

// // // var counter = 0;
// // // function someFunction() {
// // // 	console.log('It Work!!!', 'counter = ', counter);
// // // 	counter++;
// // // 	if(counter === 5) {
// // // 		clearInterval(timeId);
// // // 	}
// // // };
// // // var timeId = setInterval(someFunction, 500);


// // // var counters = 0;
// // // function someFunction2() {
// // // 	'use strict';
// // // 	var h1 = document.createElement('h1');
// // // 		h1.innerHTML = "SETINTERVAL";
// // // 		h1.style.textAlign = "center";
// // // 		document.body.appendChild(h1);
// // // 		counters++
// // // 		if(counters === 3) {
// // // 			clearInterval(times);
// // // 		}
// // // };
// // // // var times = setInterval(someFunction2, 3000);
// // // 'use strict';
// // // var now = new Date(5);


// // // var d = new Date();
// // // alert( d );
// // // document.getElementById('s').innerHTML = d.getMilliseconds('2');
// // // var second = document.getElementById('s');
// // // second.innerHTML = "01";

// // // function getMs() {
// // // 	var d = new Date();
// // // 	// d.setMilliseconds(0);
// // // 	document.getElementById('s').innerHTML = d.getMilliseconds();
// // // 	var m = new Date();
// // // 	document.getElementById('m').innerHTML = m.getMinutes();
// // // };
// // // setInterval(getMs);
// // // function makeTimer() {
// // //     var makeTimer = new Date();
// // //     var milliseconds = makeTimer.getMilliseconds();
// // //     var seconds = makeTimer.getSeconds();
// // //     var minutes = makeTimer.getMinutes();
// // //     var hours = makeTimer.getHours();
// // //     if (minutes < 10){
// // //         minutes = "0" + minutes;
// // //     };
// // //     var t_str = hours + ":" + minutes + " "+ seconds + " " + milliseconds;
// // //     if(hours > 11){
// // //         t_str += "PM";
// // //     } else {
// // //         t_str += "AM";
// // //     };
// // //     document.getElementById('seconds').innerHTML = t_str;
// // // };
// // // var p = new Date();
// // // setInterval(makeTimer);


// // //Timer from video

// // // var timer = document.getElementsByClassName("timer");
// // // [].forEach.call = (timer, function(ms) {
// // // 	//Объявление переменных
// // // 	var currentTimer = 0,
// // // 	interval = 0,
// // // 	lastUpdateTime = new Date.getTime(),
// // // 	start = ms.querySelector('button.start'),
// // // 	stop = ms.querySelector('button.stop'),
// // // 	reset = ms.querySelector('button.reset'),
// // // 	hours = ms.querySelector('span.hours'),
// // // 	minutes = ms.querySelector('span.minutes'),
// // // 	seconds = ms.querySelector('span.seconds'),
// // // 	milliseconds = ms.querySelector('span.milliseconds');

// // // 	start.addEventListener('click', startTimer);
// // // 	stop.addEventListener('click', stopTimer);
// // // 	reset.addEventListener('click', resetTimer);

// // // 	function pad(n) {
// // // 		return ('00' + n).substr(-2);
// // // 	};

// // // 	function upDate() {
// // // 		var now = new Date.getTime();
// // // 		dt = now - lastUpdateTime;
// // // 		currentTimer += dt;
		
// // // 		var time = new Date(currentTimer);
// // // 		hours.innerHTML = pad(time.getHours());
// // // 		minutes.innerHTML = pad(time.getMinutes());
// // // 		seconds.innerHTML = pad(time.getSeconds());
// // // 		milliseconds.innerHTML = pad(Match.floor(time.getMilliseconds() / 10));

// // // 		lastUpdateTime = now;
// // // 	};

// // // 	function startTimer() {
// // // 		if(!interval) {
// // // 			lastUpdateTime = new Date.getTime();
// // // 			interval = setInterval(upDate, 1);
// // // 		}
// // // 	};

// // // 	function stopTimer() {
// // // 		clearInterval(interval);
// // // 		interval = 0;
// // // 	};

// // // 	function resetTimer() {
// // // 		stopTimer();
// // // 		currentTimer = 0;
// // // 		minutes.innerHTML = seconds.innerHTML - milliseconds.innerHTML - pad(0);
// // // 	}

// // // });
// // // var ms;
// // // var Today = new Date();
// // // ms = Today.getMilliseconds() + 1;
// // // var s;
// // // var Todays = new Date();
// // // s = Todays.getMilliseconds();
// // // g = ms - s;
// // // console.log(g);


// // // var myVar = setInterval(myTimer, g);

// // // function myTimer() {
// // //     var d = new Date();
// // //     document.getElementById("milliseconds").innerHTML = d.toLocaleTimeString();
// // // }

// // // var prevTime; var curTime; var deltaTime; 
// // // prevTime = curTime;
// // // curTime = new Date().getTime();
// // // deltaTime = curTime - prevTime;
// // // console.log(deltaTime);


// // // SetInterval(function myTimer() {
// // // 	var ms, s, m, h;
// // // 	Today = new Date();
// // // 	ms = Today.getMilliseconds();
// // // 	ms += "";
// // // 	ms = ms.slice(0,2);
// // // 	console.log(ms);
// // // 	s = 0;
// // // 	if(ms = 59) {
// // // 		s++
// // // 	};
// // // 	console.log(ms,s);
// // // },


// // // var time = 0;
// // // var running = 0;
// // // function startPauseContinue() {
// // // 	if(running == 0) {
// // // 		running = 1;
// // // 		increment();
// // // 		document.getElementById('start').innerHTML = 'pause';
// // // 	}
// // // 	else {
// // // 		running = 0;
// // // 		document.getElementById('start').innerHTML = 'continue';
// // // 	}
// // // };
// // // function reset() {
// // // 	running = 0;
// // // 	document.getElementById('start').innerHTML = 'start';
// // // 	document.getElementById('hours').innerHTML = '00';
// // // 	document.getElementById('minutes').innerHTML = '00';
// // // 	document.getElementById('seconds').innerHTML = '00';
// // // 	document.getElementById('milliseconds').innerHTML = '00';
// // // };
// // // function increment() {
// // // 	'use strict';
// // // 	if (running = 1) {
// // // 		setTimeout(function() {
// // // 			time++;
// // // 			var hours = Match.floor(time/10/60/60);
// // // 			var minutes = Match.floor(time/10/60);
// // // 			var seconds = Match.floor(time/10%60);
// // // 			var milliseconds = Match.floor(time%10);
// // // 			if(minutes<10) {
// // // 				minutes = 0 + minutes;
// // // 			};
// // // 			if(seconds<10) {
// // // 				seconds = 0 + seconds;
// // // 			};
// // // 			document.getElementById('hours').innerHTML = hours;
// // // 			document.getElementById('minutes').innerHTML = minutes;
// // // 			document.getElementById('seconds').innerHTML = seconds;
// // // 			document.getElementById('milliseconds').innerHTML = milliseconds;
// // // 			increment();

// // // 		}, 100)
// // // 	}
// // // }
// // // 	start.addEventListener('click', increment);
// // // 	clear.addEventListener('click', reset);
// // 	// reset.addEventListener('lick', resetTimer);


// // // устанавливаем начальное значение миллисекунд

// // // function make() {
// // // var d = new Date();
// // // d.setMilliseconds(965);
// // // var milliseconds = d.getMilliseconds();
// // // milliseconds = ('00' + milliseconds);
// // // milliseconds = milliseconds.slice(-3);
// // // console.log(milliseconds);
// // // milliseconds = +milliseconds + 4;
// // // var minutes = 0;
// // // if(milliseconds == 996) {
// // // 	minutes++;
// // // }
// // // //Создаём счетчик времени
// // // var  timerCurrent = 0;
// // // timerCurrent += milliseconds;
// // // console.log(milliseconds, minutes);
// // // };
// // // var timerId = setInterval(make, 4);
// // 	var counter = 0;
// // 	var seconds = 0;
// // 	var minutes = 0;
// // 	var hours = 0;

// // setInterval(function(){

// // 	counter = counter + 4;

// // 	if(counter == 56) {
// // 		counter = 0; 
// // 		seconds++;
// // 		if(seconds == 59) {
// // 			seconds = 0; 
// // 			minutes++;
// // 				if(minutes == 59) {
// // 				minutes = 0; 
// // 				hours++;
// // 					if(hours == 24) {
// // 						hours = 0; 
// // 					};
// // 				};
// // 		};
// // 	};
// // 	console.log(counter);
// // 	console.log(seconds);
// // 	console.log(minutes);
// // 	console.log(hours);
// // 	return counter;
// // },2000);





// // var timer = document.getElementById(screen);
// // var sPc = document.getElementById(start); //startPauseContinue
// // var clear = document.getElementById(clear);

// // sPc.addEventListener('click', startTimer);
// // clear.addEventListener('click', clear);





// var timer = document.getElementById("timer");
// // [].forEach.call = (timer, function(ms) {
// 	//Объявление переменных
// 	var currentTimer = 0,
// 	interval = 0,
// 	lastUpdateTime = new Date.getTime(),
// 	sPc = ms.getElementById('start'), //stop, pause, continue
// 	clear = ms.getElementById('clear'),
// 	// reset = ms.getElementById(''),
// 	hours = ms.getElementById('hours'),
// 	minutes = ms.getElementById('minutes'),
// 	seconds = ms.getElementById('seconds'),
// 	milliseconds = ms.getElementById('milliseconds');

// 	sPc.addEventListener('click', startTimer);
// 	// stop.addEventListener('click', stopTimer);
// 	clear.addEventListener('click', resetTimer);

// 	function pad(n) {
// 		return ('00' + n).substr(-2);
// 	};

// 	function upDate() {
// 		var now = new Date.getTime();
// 		var dt;
// 		dt = now - lastUpdateTime;
// 		currentTimer += dt;
		
// 		var time = new Date(currentTimer);
// 		hours.innerHTML = pad(time.getHours());
// 		minutes.innerHTML = pad(time.getMinutes());
// 		seconds.innerHTML = pad(time.getSeconds());
// 		milliseconds.innerHTML = pad(Match.floor(time.getMilliseconds() / 10));

// 		lastUpdateTime = now;
// 	};

// 	function startTimer() {
// 		if(!interval) {
// 			lastUpdateTime = new Date.getTime();
// 			interval = setInterval(upDate, 1);
// 		}
// 	};

// 	function stopTimer() {
// 		clearInterval(interval);
// 		interval = 0;
// 	};

// 	function resetTimer() {
// 		stopTimer();
// 		currentTimer = 0;
// 		minutes.innerHTML = seconds.innerHTML - milliseconds.innerHTML - pad(0);
// 	}

// // });
// // var ms;
// // var Today = new Date();
// // ms = Today.getMilliseconds() + 1;
// // var s;
// // var Todays = new Date();
// // s = Todays.getMilliseconds();
// // g = ms - s;
// // console.log(g);


// // var myVar = setInterval(myTimer, g);

// // function myTimer() {
// //     var d = new Date();
// //     document.getElementById("milliseconds").innerHTML = d.toLocaleTimeString();
// // }

// // var prevTime; var curTime; var deltaTime; 
// // prevTime = curTime;
// // curTime = new Date().getTime();
// // deltaTime = curTime - prevTime;
// // console.log(deltaTime);

// var start = new Date().getTime(),
//     elapsed = '0.0';

// window.setInterval(function()
// {
//     var time = new Date().getTime() - start;

//     elapsed = Math.floor(time / 100) / 10;
//     if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

//     document.title = elapsed;
	
// }, 100);

// (function() {
// // Получить миллисекунды
// 	var myMilliseconds = new Date();
// 	myMilliseconds.setMilliseconds(0);
// 	var milliseconds = myMilliseconds.getMilliseconds();
// 	alert(milliseconds);

// var currentTimer = 0,
// 	interval = 0,
// 	sPc = document.getElementById('start'), //stop, pause, continue
// 	clear = document.getElementById('clear'),
// 	hours = document.getElementById('hours'),
// 	minutes = document.getElementById('minutes'),
// 	seconds = document.getElementById('seconds'),
// 	milliseconds = document.getElementById('milliseconds');


// 	start.addEventListener('click', startTimer);
// 	clear.addEventListener('click', resetTimer);

// function pad(n) {
// 		return ('00' + n).substr(-2);
// 	};


// function upDate() {
// 	currentTimer += milliseconds;
// 	var time = new Date(currentTimer);
// 		hours.innerHTML = pad(time.getHours());
// 		minutes.innerHTML = pad(time.getMinutes());
// 		seconds.innerHTML = pad(time.getSeconds());
// 		milliseconds.innerHTML = pad(Match.floor(time.getMilliseconds() / 10));
	
// };



// 	function startTimer() {
// 		if(!interval) {
// 			// lastUpdateTime = new Date.getTime();
// 			interval = setInterval(upDate, 1);
// 		}
// 	};

// 	function stopTimer() {
// 		clearInterval(interval);
// 		interval = 0;
// 	};

// // 	function resetTimer() {
// // 		stopTimer();
// // 		currentTimer = 0;
// // 		minutes.innerHTML = seconds.innerHTML - milliseconds.innerHTML - pad(0);
// // 	}


// // }());
// function my() {
// var myMilliseconds = new Date();
// 	myMilliseconds.setSeconds(50);
// 	var milliseconds = myMilliseconds.getHours();
// 	alert(milliseconds);
// 	alert(myMilliseconds);

// };
// my();
// // alert(my);

// var date = new Date();

// // Вывод toLocaleDateString() без аргументов зависит от реализации,
// // локали по умолчанию и часового пояса по умолчанию
// console.log(date.toLocaleDateString());



















// (function createTimer(){
// //Создаём ед. измерения
// var myDate = new Date();
// myDate.setMilliseconds(0);
// var milliseconds = myDate.getMilliseconds();
// myDate.setSeconds(0);
// var seconds = myDate.getSeconds();
// myDate.setMinutes(0);
// var minutes = myDate.getMinutes();
// myDate.setHours(0);
// var hours = myDate.getHours();
// console.log (milliseconds + ":" + seconds + ":" + minutes + ":" + hours);

// //Переменные
// var interval = 0,
//  	currentTimer = 0,
//  	startTimer,
// 	hoursDisplay = document.getElementById('hours'),
// 	minutesDisplay = document.getElementById('minutes'),
// 	secondsDisplay = document.getElementById('seconds'),
// 	millisecondsDisplay = document.getElementById('milliseconds'),
// 	//Задействуем панель управления
// 	sPc = document.getElementById(start); //startPauseContinue


// //Выводим начальные значения на экран
// function createInitialTimer(){
// interval = 0;
// currentTimer = 0;
// hoursDisplay.innerHTML = double(hours);
// minutesDisplay.innerHTML = double(minutes);
// secondsDisplay.innerHTML = double(seconds);
// millisecondsDisplay.innerHTML = doubleMs(milliseconds);
// };
// createInitialTimer();
// //Приводим минуты, секунды и часы к единому формату
// function double(n) {
// 		return ('0' + n).substr(-2);
// 	};

// //Приводим миллисекунды к единому формату
// function doubleMs(n) {
// 		return ('00' + n).slice(-3, -1);
// 	};

// //Старт таймера

// startTimer = setInterval(function() {
// 		// interval++;
// 		currentTimer += interval;
// 		milliseconds += 990;
// 		createInitialTimer();
// 		if(milliseconds>990) {
// 			seconds++;
// 			milliseconds = 0;
// 			if(seconds>59) {
// 				minutes++;
// 				seconds	 = 0;
// 				if(minutes>59) {
// 					hours++;
// 					minutes	 = 0;
// 					if(hours>24) {
// 						hours++;
// 					}
// 				}
// 			}	
// 		}
// }, 1);// 10!!!!!!!
// function clearTimer() {
// 	clearInterval(startTimer);
// 		currentTimer = 0;
// 	createInitialTimer();

// };
// function m() {alert(interval)};
// 	// var clear = document.getElementById(clear);
// clear.addEventListener('click', clearTimer);
// }());


// sPc.addEventListener('click', startTimer);





// // // var time = 0;
// // // var running = 0;
// // // function startPauseContinue() {
// // // 	if(running == 0) {
// // // 		running = 1;
// // // 		increment();
// // // 		document.getElementById('start').innerHTML = 'pause';
// // // 	}
// // // 	else {
// // // 		running = 0;
// // // 		document.getElementById('start').innerHTML = 'continue';
// // // 	}
// // // };
// // // function reset() {
// // // 	running = 0;
// // // 	document.getElementById('start').innerHTML = 'start';
// // // 	document.getElementById('hours').innerHTML = '00';
// // // 	document.getElementById('minutes').innerHTML = '00';
// // // 	document.getElementById('seconds').innerHTML = '00';
// // // 	document.getElementById('milliseconds').innerHTML = '00';
// // // };
// // // function increment() {
// // // 	'use strict';
// // // 	if (running = 1) {
// // // 		setTimeout(function() {
// // // 			time++;
// // // 			var hours = Match.floor(time/10/60/60);
// // // 			var minutes = Match.floor(time/10/60);
// // // 			var seconds = Match.floor(time/10%60);
// // // 			var milliseconds = Match.floor(time%10);
// // // 			if(minutes<10) {
// // // 				minutes = 0 + minutes;
// // // 			};
// // // 			if(seconds<10) {
// // // 				seconds = 0 + seconds;
// // // 			};
// // // 			document.getElementById('hours').innerHTML = hours;
// // // 			document.getElementById('minutes').innerHTML = minutes;
// // // 			document.getElementById('seconds').innerHTML = seconds;
// // // 			document.getElementById('milliseconds').innerHTML = milliseconds;
// // // 			increment();

// // // 		}, 100)
// // // 	}
// // // }
// // // 	start.addEventListener('click', increment);
// // // 	clear.addEventListener('click', reset);
// // 	// reset.addEventListener('lick', resetTimer);







//Рабочая версия
(function createTimer(){

	//Создаём ед. измерения
	var myDate = new Date();
	myDate.setMilliseconds(0);
	var milliseconds = myDate.getMilliseconds();
	myDate.setSeconds(0);
	var seconds = myDate.getSeconds();
	myDate.setMinutes(0);
	var minutes = myDate.getMinutes();
	myDate.setHours(0);
	var hours = myDate.getHours();
	console.log (milliseconds + ":" + seconds + ":" + minutes + ":" + hours);

	//Переменные-счетчики
	var interval = 0,
	 	currentTimer = 0;


	//Функция выводящая показатели на экран
	function buildTimer() {
	 	var hoursDisplay = document.getElementById('hours'),
		minutesDisplay = document.getElementById('minutes'),
		secondsDisplay = document.getElementById('seconds'),
		millisecondsDisplay = document.getElementById('milliseconds');
		hoursDisplay.innerHTML = double(hours);
		minutesDisplay.innerHTML = double(minutes);
		secondsDisplay.innerHTML = double(seconds);
		millisecondsDisplay.innerHTML = doubleMs(milliseconds);	
	 };
	buildTimer();//Отображает первоначальные значения


	//Приводим минуты, секунды и часы к единому формату
	function double(n) {
			return ('0' + n).substr(-2);
		};

	//Приводим миллисекунды к единому формату
	function doubleMs(n) {
			return ('00' + n).slice(-3, -1);
		};


	//Старт таймера

	var x;
	function startTimer() {		
		 x = setInterval(makeTimer, 10);	
	};

	function makeTimer() {
		interval = 1
			currentTimer ++;
			milliseconds += 10;
			if(milliseconds>990) {
				seconds++;
				milliseconds = 0;
				if(seconds>59) {
					minutes++;
					seconds	 = 0;
					if(minutes>59) {
						hours++;
						minutes	 = 0;
						if(hours>24) {
							hours++;
						}
					}
				}	
			}
	console.log (hours + ":" + minutes + ":" + seconds + ":" + milliseconds);
	console.log (currentTimer + ":" + interval);
	buildTimer();
	};


	//Работа таймера	
	function startPauseContinue() {
		if(interval == 0 && currentTimer == 0) {
			startTimer();
			document.getElementById('start').innerHTML = 'PAUSE';
			document.getElementById('start').classList.remove('btn-danger');
			document.getElementById('start').classList.add('btn-warning');
		}
		else if (interval == 1 && currentTimer > 0){
			stopTimer();
			document.getElementById('start').innerHTML = 'CONTINUE';
			document.getElementById('start').classList.remove('btn-warning');
			document.getElementById('start').classList.add('btn-danger');		
		}
		else if (interval == 0 && currentTimer > 0){
			startTimer();
			document.getElementById('start').innerHTML = 'PAUSE';
			document.getElementById('start').classList.remove('btn-danger');
			document.getElementById('start').classList.add('btn-warning');
		}
	};

	//Функция остановки таймера
	function stopTimer() {
		clearInterval(x);
		interval = 0;
	};


	//Функция очистки таймера
	function clearTimer() {
		stopTimer();
		currentTimer = 0;
		milliseconds = 0;
		seconds = 0;
		minutes = 0;
		hours = 0;
		buildTimer();
		document.getElementById('start').innerHTML = 'START';
		document.getElementById('start').classList.remove('btn-warning');

	};


	//Запуск панели управления
	start.addEventListener('click', startPauseContinue);
	clear.addEventListener('click', clearTimer);
}());

