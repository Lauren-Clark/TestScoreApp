"use strict";

var names = ["Ben" , "Joel" , "Judy" , "Anne" ];
var scores = [88 , 98 , 77 , 88 ];
var b = 4; //setting size of the array

var $ = function (id) { return document.getElementById(id); };


window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

/*step 3
display results in the div element with "results" as its id --
use DOM with heading as h2 and average and highest scores as <p> elements
easiest way is to use the innerHTML property
*/

var displayResults = function () {
///// get average

var total = 0;
for(var i = 0; i < scores.length; i++) {
	total += scores[i];
}
///// get highest score
//Math.max(0, 101); 
var arr = [88, 98, 77, 88];
//var max = Math.max(...arr);
var highScore =Math.max(...scores);
var topName = names[scores.indexOf(highScore)];
console.log(highScore);

var avg = total / scores.length;
document.getElementById("results").innerHTML = '<h2>Results</h2><br><p>Average Score = ' + avg + '</p><br /><p> High score = ' + topName + ' with a score of ' + highScore +'</p>';
}


/* step 4: write the displayScores function:
gets names and scores from arrays, shows as rows in HTML table with "scores_table" as id
*/


function displayScores() {
var content = '';
names.forEach(function(name, i) {
    content += '<tr><td>' + name + '</td><td>' + scores[i] + '</td></tr>'
});
$("scores_table").innerHTML = '<h2>Scores</h2>\ <tr><th>Name</th><th>Score</th></tr>' + content;

};

/*step 5&6:
write the addScore function - add name and score to the 2 arrays
add data validation to addScore()  - name entry can't be empty, score must be positive 0-100
use alert() if entry invalid with message "You must enter a name and a valid score" 
*/

var addScore = function () {
	var name = $("name").value;
	var score = parseInt($("score").value);
	if (name == "" || isNaN(score) || score < 0 || score > 100){
		alert("You must enter a name and a valid score!");
	} else { 
		names[names.length] = name; //=name is  relating to form id
		scores[scores.length] = score; //=score is relating to form id
		$("name").value = "";
		$("score").value = "";
	}
	$("name").focus();
    document.getElementById("results").innerHTML = '<h2>Results</h2><br><p>' + names + '<br />  Score = ' + scores +'</p>';

};

