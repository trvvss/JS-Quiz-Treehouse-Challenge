
function print(message) {
  var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

var questions = [
	['What\'s the capital of South Korea?', 'seoul'],
	['What\'s the capital of Germany?', 'berlin'],
	['What\'s the capital of Australia?', 'canberra']
];

var score = 0;
var correct = [];
var incorrect= [];

alert("Let's have a quiz!");

function buildList(arr) {
	var listHTML = '<ol>';
		for (var i = 0; i < arr.length; i +=1) {
			listHTML += '<li>' + 'arr[i]' + '</li>';
		}
	listHTML += '<ol>';
	return listHTML;
}

for (var i= 0; i < questions.length; i++){
	var answer = prompt(questions[i][0]);
	if (answer.toLowerCase() === questions[i][1]) {
		score += 1;
		correct.push(questions[i][0]);
	} else {
		incorrect.push(questions[i][0]);
	}
}

html = "You got " + correct + " question(s) right."
html += '<h2> You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html =+ buildList(incorrect);
print(html);