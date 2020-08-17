let vowelsArr = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'], soundlessArr = ['ь', 'ъ'], spaceArr = [" "];
let consonantsArr = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
let symbolArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '?', ',', '/', '.', ':'];
let vowels_int = 0, consonants_int = 0, soundless_int = 0, symbol_int = 0, space_int = 0;

function clean() {
	vowels_int = 0; consonants_int = 0; soundless_int = 0; symbol_int = 0; space_int = 0;
	document.getElementById("sogl").innerHTML = 0;
	document.getElementById("glas").innerHTML = 0;
	document.getElementById("bezz").innerHTML = 0; 	
	document.getElementById("symb").innerHTML = 0; 	
	document.getElementById("prob").innerHTML = 0;
}

document.querySelector("#checkBtn").addEventListener("click", (e) => {
	let txtData = document.getElementById("txtarea-block").value.toLowerCase().split("");
	clean();
	
	txtData.forEach((elem) => {
		if (consonantsArr.includes(elem)) document.getElementById("sogl").innerHTML = consonants_int += 1;
		if (vowelsArr.includes(elem)) document.getElementById("glas").innerHTML = vowels_int += 1;
		if (soundlessArr.includes(elem)) document.getElementById("bezz").innerHTML = soundless_int += 1;	
		if (symbolArr.includes(elem)) document.getElementById("symb").innerHTML = symbol_int += 1;	
		if (spaceArr.includes(elem)) document.getElementById("prob").innerHTML = space_int += 1;
	});
});


