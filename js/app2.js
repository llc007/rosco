// Variables
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Empieza por A:", " Comida que comen los Chinos", "Arroz"),
	new Word(1, "B", "Empieza por B:", " Pais que salio derrotado en el fallo de la haya", "Bolivia"),
	new Word(2, "C", "Empieza por C:", " Corriente de agua que cae desde cierta altura a causa de un brusco desnivel en su cauce, especialmente en un rio", "Cascada"),
	new Word(3, "D", "Empieza por D:", " Profeta que no se contamino con la comida del Rey", "Daniel"),
	new Word(4, "E", "Empieza por E:", " Línea curva que describe varias vueltas alrededor de un punto, alejándose cada vez más de él", "Espiral"),
	new Word(5, "F", "Empieza por F:", " De aspecto malo o desfavorable", "Feo/a"),
	new Word(6, "G", "Empieza por G:", " Minino", "Gato"),
	new Word(7, "H", "Empieza por H:", " Animal que se encuentra en el escudo patrio", "Huemul"),
	new Word(8, "I", "Empieza por I:", " Antonimo de derecho", "Izquierdo"),
	new Word(9, "J", "Empieza por J:", " Al dar 7 vueltas cayeron los muros de esta ciudad", "Jerico"),
	new Word(10, "L", "Empieza por L:", " Signo escrito que, solo o unido a otros, representa un sonido.", "Lapiz"),
	new Word(11, "M", "Empieza por M:", " Persona que sufre o muere por defender su religión o sus ideales. ", "Martir"),
	new Word(12, "N", "Empieza por N:", " Fruto citrico de color anaranjado.", "Naranja"),
	new Word(13, "Ñ", "Contiene la Ñ:", " Dar a una cosa un color distinto del que tiene.", "Teñir"),
	new Word(14, "O", "Empieza por O:", " Que conoce todas las cosas reales y posibles.", "Omnisciente"),
	new Word(15, "P", "Empieza por P:", " Elemento estructural resistente, de sección poligonal o circular, con función de soporte.", "Pilar"),
	new Word(16, "Q", "Empieza por Q:", " Que se puede romper fácilmente.", "Quebradizo"),
	new Word(17, "R", "Empieza por R:", " Operación quirúrgica para restaurar la nariz.", "Rinoplastia"),
	new Word(18, "S", "Empieza por S:", " Falta de ruido..", "Desaliño"),
	new Word(19, "T", "Empieza por T:", " Libro de la biblia antes de Filemon.", "Tito"),
	new Word(20, "U", "Contiene la U:", " Emitir mujidos.", "Mujir"),
	new Word(21, "V", "Empieza por V:", " Aparato para ventilar o refrigerar un lugar impulsando aire a una presión moderada, generalmente mediante un motor que hace girar unas aspas.", "Ventilador"),
	new Word(22, "X", "Contiene la X:", " Capa de color rojizo que se forma en la superficie del hierro y otros metales a causa de la oxidación provocada por la humedad o el agua.", "Oxido"),
	new Word(23, "Y", "Contiene la Y:", " Abstenerse, total o parcialmente, de comer y beber durante un tiempo, generalmente por motivos religiosos, morales o de salud.", "Ayunar"),
	new Word(24, "Z", "Contiene la Z:", " Calzado que cubre total o parcialmente el pie sin sobrepasar el tobillo, con una suela de un material casi siempre más duro que el resto.", "Zapato")
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
