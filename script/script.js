
const search = document.querySelector("[name='search']"),
	btnSearch = document.querySelector(".search button"),
	search_res = document.querySelector(".search_result");

btnSearch.addEventListener('click', (e) => {
	e.preventDefault();


	fetch('search.php', {
			method: "POST",
			body: JSON.stringify({
				query: search.value
			}),
			headers: {
				"Content-type": "application/json"
			}
		})
		.then(response => response.json())
		.then(json => {
			let creat_ul = document.createElement('ul');
			for (let i = 0; i < json.length; i++) {
				creat_ul.innerHTML += `<li>
										<a href="${json[i].href}">${json[i].text}</a>
										</li>`;

			}
			search_res.innerHTML = creat_ul.outerHTML;
		})
		.catch(() => console.log("Ошибка"));

});
