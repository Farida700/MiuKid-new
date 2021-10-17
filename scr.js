(function () {
	'use strict';

// 56 урок

	const btnClick = document.querySelector(".form [name='save']");
	const btnReset = document.querySelector(".form [name='reset']");

	const check_name = localStorage.getItem('name');
	const check_sname = localStorage.getItem('sname');
	const check_number = localStorage.getItem('number');
	const check_addres = localStorage.getItem('addres');


	if (check_name || check_sname || check_number || check_addres) {
		document.getElementsByClassName("name")[0].value = check_name;
		document.querySelector("[name='sname']").value = check_sname;
		document.querySelector("[name='number']").value = check_number;
		document.querySelector("[name='addres']").value = check_addres;
	}

	btnClick.addEventListener('click', function (e) {
		e.preventDefault();

		const name = document.getElementsByClassName("name")[0].value;
		const sname = document.querySelector("[name='sname']").value;
		const number = document.querySelector("[name='number']").value;
		const addres = document.querySelector("[name='addres']").value;

		if (name && sname && number && addres) {
			localStorage.setItem('name', name);
			localStorage.setItem('sname', sname);
			localStorage.setItem('number', number);
			localStorage.setItem('addres', addres);
			alert("Данные сохранены");
		} else {
			alert("Поля не должны быть пустыми!")
		}


	});

	btnReset.addEventListener('click', function (e) {
		e.preventDefault();
		localStorage.clear();
	});


}());