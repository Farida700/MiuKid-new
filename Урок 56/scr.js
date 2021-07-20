localStorage.setItem('user_name', 'Farida'); //оздать запись в памяти

//localStorage.removeItem('user_name', 'Farida'); удаление записи в памяти

let result = localStorage.getItem('user_name'); //получение записи

console.log(result);


localStorage.setItem('user_name', 'Farida');
localStorage.setItem('s_name', 'Mashanlo');
localStorage.setItem('otchestvo', 'Muhamedovna');
localStorage.setItem('age', '34');
localStorage.setItem('rabota', 'school');
localStorage.setItem('doljnost', 'teacher');
localStorage.setItem('gorod', 'Tokmok');
localStorage.setItem('deti', 'troe');
localStorage.clear();