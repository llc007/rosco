// Variables
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Empieza por A:", " Aeronave con alas propulsada horizontalmente por uno o varios motores, que sirve para el transporte de viajeros o mercancías o con fines militares.", "Avion"),
	new Word(1, "B", "Empieza por B:", " Antonimo de negro", "Blanco"),
	new Word(2, "C", "Empieza por C:", " Verdura que al picarla hace llorar", "Cebolla"),
	new Word(3, "D", "Empieza por D:", " Línea recta que une dos puntos de una circunferencia, de una curva cerrada o de la superficie de una esfera pasando por su centro", "Diametro"),
	new Word(4, "E", "Contiene la E:", " Máquina que se conecta a una computadora electrónica y que sirve para imprimir la información seleccionada contenida en ella.", "Impresora"),
	new Word(5, "F", "Empieza por F:", " Lámpara, generalmente dirigible, que emite una luz muy intensa.", "Foco"),
	new Word(6, "G", "Empieza por G:", " Color como el del acero, el cemento o la piel de los elefantes.", "Gris"),
	new Word(7, "H", "Empieza por H:", " Suele cocinarse a la copa, revuelto o duro", "Huevo"),
	new Word(8, "I", "Empieza por I:", " Que está situado en la parte de dentro de una cosa", "Interior"),
	new Word(9, "J", "Empieza por J:", " Que está en el período de la vida entre la niñez y la edad madura.", "Joven"),
	new Word(10, "L", "Empieza por L:", " Utensilio para escribir, dibujar o pintar que consiste en una barra delgada y larga generalmente de madera, con una mina cilíndrica fina de grafito u otra sustancia mineral en el interior que sobresale por uno de los extremos de esta barra cuando está afilado", "Lapiz"),
	new Word(11, "M", "Empieza por M:", " Dirigir la vista hacia algo y fijar la atención en ello.. ", "Mirar"),
	new Word(12, "N", "Empieza por N:", " Festividad religiosa que se celebra el día 25 de diciembre, en que los cristianos conmemoran el nacimiento de Jesús.", "Navidad"),
	new Word(13, "Ñ", "Empieza por Ñ:", " Ave corredora similar al avestruz, pero de menor tamaño, sin cola, con tres dedos en cada pie y el plumaje gris o pardo; habita en las llanuras de América del Sur.", "Ñandu"),
	new Word(14, "O", "Empieza por O:", " Terreno plantado de olivos.", "Olivar"),
	new Word(15, "P", "Empieza por P:", " Molusco marino sin concha, de cabeza ovalada y muy voluminosa que tiene 8 tentaculo", "Pulpo"),
	new Word(16, "Q", "Empieza por Q:", " Ciudad de Chile en la que se encuentra el mall Zofri.", "Iquique"),
	new Word(17, "R", "Empieza por R:", " Instrumento para remar que consiste en una pala larga y estrecha de madera que permite mover o hacer avanzar una embarcación haciendo con ella fuerza en el agua.", "Remo"),
	new Word(18, "S", "Contiene la S:", " Mover y presionar repetidamente una o más sustancias sólidas con un líquido hasta que se forma una masa homogénea, compacta y blanda.", "Amasar"),
	new Word(19, "T", "Empieza por T:", " Uno, Dos y ...??", "Tres"),
	new Word(20, "U", "Contiene la U:", " Fruto del olivo, comestible, de pequeño tamaño, forma ovalada, color verde oscuro, negro cuando está madura, y con un hueso o carozo grande y duro en su interior que encierra la semilla.", "Aceituna"),
	new Word(21, "V", "Empieza por V:", " Sentido corporal que permite ver las cosas materiales.", "Vista"),
	new Word(22, "X", "Contiene la X:", " Instrumento musical de viento de la familia del metal, formado por un tubo doblado de forma similar a una J.", "Saxofon"),
	new Word(23, "Y", "Contiene la Y:", " Artista de circo, generalmente vestido y maquillado de forma llamativa, que hace gestos y escenificaciones graciosos o grotescos y cuenta chistes para divertir y hacer reír al público.", "Payaso"),
	new Word(24, "Z", "Contiene la Z:", " Hombre pequeño que subio a un arbol para ver a Jesus.", "Zaqueo")
];

// Functions
// -----------------------------------------------------------------------------

function Word(idNumber, letter, hint, definition, word, correct) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
}

function showDefinition(pos) {
	$("#js--hint").html(words[pos].hint);
	$("#js--definition").html(words[pos].definition);
}

var remainingWords = 25;

function checkAnswer(pos) {
	var userAnswer = $("#js--user-answer").val().toLowerCase();
	if (userAnswer == words[pos].word.toLowerCase()) {
		words[pos].correct = true;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--success");

	} else {
		words[pos].correct = false;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--failure");
	}
	remainingWords--;
	$("js--score").html(remainingWords);

	return count++;
}

//Esta bien
function checkAnswer1(pos) {
	
		words[pos].correct = true;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--success");

	
	remainingWords--;
	$("js--score").html(remainingWords);

	return count++;
}

//Esta mal
function checkAnswer2(pos) {
	
		words[pos].correct = false;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--failure");

	
	remainingWords--;
	$("js--score").html(remainingWords);

	return count++;
}

function pasapalabra(pos) {
	var w = words.splice(pos, 1)[0];
	words.push(w);

}

function continuePlaying() {
	if (count != 25) {
		$("#js--user-answer").val("");
		showDefinition(count);
	} else {
		endGame();
	}
}

var seconds;
var temp;

function countdown() {
	seconds = $("#js--timer").html();
	seconds = parseInt(seconds, 10);
	if (seconds == 1) {
		temp = $("#js--timer");
		temp.innerHTML = 0;
		endGame();
		return;
	}
	seconds--;
	temp = $("#js--timer");
	temp.html(seconds);
	timeoutMyOswego = setTimeout(countdown, 1000);
}

function endGame() {
	$("#js--question-controls").addClass("hidden");
	$("#js--pa-controls").removeClass("hidden");
	$("#js--end-title").html("Fin de partida!");
	$("#js--end-subtitle").html(showUserScore());
	$("#js--close").addClass("hidden")
}

function showUserScore() {
	var counter = 0;
	for (i = 0; i < words.length; i++) {
		if (words[i].correct == true) {
			counter++;
		}
	}
	return "Has conseguido un total de " + counter + " aciertos.";
}


// Main Program
// ----------------------------------------------------------------------------- */

// New game
var count = 0; // Counter for answered words
$("#js--new-game").click(function() {
	$("#js--send").hide();
	$("#js--ng-controls").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
	$("#js--close").removeClass("hidden");
	showDefinition(count);
	countdown();
});

// Send the answer
$("#js--send").click(function() {
	checkAnswer(count);
	continuePlaying();
});

// Respuesta correcta
$("#js--correcto").click(function() {
	checkAnswer1(count);
	continuePlaying();
});

// Respuesta correcta
$("#js--error").click(function() {
	checkAnswer2(count);
	continuePlaying();
});

// Key bindings for send the answer
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "13") {
		checkAnswer(count);
		continuePlaying();
	}
});

// Skip the word
$("#js--pasapalabra").click(function() {
	pasapalabra(count);
	continuePlaying();
});

// Key bindings for skip the word
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "32") {
		pasapalabra(count);
		continuePlaying();
	}
});

// Play again
$("#js--pa").click(function() {
	location.reload()
});

// End the game
$("#js--close").click(function() {
	endGame();
});
