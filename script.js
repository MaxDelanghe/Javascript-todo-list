window.onload = function(){
	var Input = document.getElementById("add");
	var add_Button = document.getElementsByTagName("button")[0];
	var todo = document.getElementById("todo");
	var todoted = document.getElementById("todoted");

	add_Button.addEventListener('click', event => {
		var li_for_ul = document.createElement("li");
		var ok = document.createElement("p");
		var erase = document.createElement("button");
		var fini = document.createElement("button");

		ok.innerText = Input.value;

		erase.innerText="Suprimer tache";
		erase.classList.add("hover_red");
		fini.innerText="tache terminer";

		li_for_ul.appendChild(ok);
		ok.appendChild(fini);
		ok.appendChild(erase);
		erase.addEventListener('click', event => {
			li_for_ul.remove();
		});
		fini.addEventListener('click', event => {
			fini.remove();
			todoted.appendChild(li_for_ul);
		});
		todo.appendChild(li_for_ul);
	});
};
