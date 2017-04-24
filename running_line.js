/*
	RunningLine class
		This class produce effect of light-emitting diode (LED) display

		htmlObj - DOM object for generating html output
		sentence - string to be displayed
		vocabulary - the name of js object keeping chars of vocabulary

*/

RunningLine = function (htmlObj, sentence, vocabulary){
	this.htmlObj = htmlObj;
	this.sentence = sentence.toUpperCase();
	this.vocabulary = vocabulary;

	this.letterHeight = vocabulary['L32'].length; // height (in vocabulary's dots) of letters in running line
	this.line = []; // this array keeps chars of sentence translated into vocabulary's matrix chars
	this.linePosition = this.htmlObj.parentNode.offsetWidth; // current position of generated running line

	this.speed = 50; // speed of animation
	this.timer = null; // timer of animation

	this.createLine();
	this.drawLine();
	this.runLine();
}

// we construct this.line array
// every element of this array is a line of resulting matrix sentence
RunningLine.prototype.createLine = function (){
	for (var j=0; j<this.letterHeight; j++){
		this.line[j] = "";
		for (var i=0; i<this.sentence.length; i++){
			var index = "L" + this.sentence.charCodeAt(i);
			var letter = this.vocabulary[index];
			if(typeof letter != 'undefined'){
				this.line[j] += letter[j] + this.vocabulary.gap;
			}
		}
	}	
}

// we generate html from this.line array
RunningLine.prototype.drawLine = function (){
	this.htmlObj.style.left = this.linePosition + "px";
	
	for (var j=0; j<this.letterHeight; j++){
		for (var i=0; i<this.line[j].length; i++){
			if (this.line[j].charAt(i) != " "){
				var div = document.createElement('div');
				div.style.top = j*4 + 4 + "px";
				div.style.left = i*4 + "px";
				this.htmlObj.appendChild(div);
			}
		}
	}
}

// we animate the generated html 
RunningLine.prototype.runLine = function (){
	this.linePosition -= 4;
	if(this.linePosition < -this.line[0].length*4) {
		this.linePosition = this.htmlObj.parentNode.offsetWidth;
	}
	this.htmlObj.style.left = this.linePosition + "px";
	var _this = this; 
	this.timer = setTimeout(function(){_this.runLine()}, this.speed);	
}

// we generate new sentence from user input
// the name of input field is 'sentence'
RunningLine.prototype.setSentence = function(form){
	var inputField = form['sentence'];

	this.htmlObj.innerHTML = "";
	this.sentence = inputField.value.toUpperCase();
	this.linePosition = this.htmlObj.parentNode.offsetWidth;
	clearTimeout(this.timer);

	this.createLine();
	this.drawLine();
	this.runLine();
}


/*
// we start running line
window.onload = function (){
	runningLineObject = new RunningLine(document.getElementById('running_line_string'), 'хуй!!!', dirty_font);
}
*/