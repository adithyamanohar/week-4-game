$( document ).ready(function(){
 


  var randomNum= Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  // Display the random number in the webpage
  $('#numberToGet').text(randomNum);
  // display the random number in the console log
  console.log("The Number to get is: " + randomNum);

// Set up a math.random for each crystal between 1-12. They should have the same value.

var bluenum = Math.floor(Math.random()*11+1);

	var greennum = Math.floor(Math.random()*11+1);

	var rednum = Math.floor(Math.random()*11+1);

	var yellownum = Math.floor(Math.random()*11+1);


// console log each crystal number 

console.log('blue crystal is :' + bluenum);
console.log('green crystal is :' + greennum);
console.log('red crystal is :' + rednum);
console.log('yellow crystal is :' + yellownum);


// user total variable

var userTotal = 0;

$("#userTotal1").text(userTotal);

//number of wins

var playerWins = 0;

//number of losses

var playerLosses = 0;

// display the wins and losses in the div
$('#playerWins').text(playerLosses);

$('#playerLosses').text(playerWins);



// create a function to restart the game when player reaches the end, win or lose

function gameReset (){
	// Reset the User total
	userTotal = 0;
	$("#userTotal1").text(userTotal);

	// reset all of the randomly generated numbers by generating new ones
	randomNum=Math.floor(Math.random()*101+19)
	$('#numberToGet').text(randomNum);

	bluenum = Math.floor(Math.random()*11+1);

	greennum = Math.floor(Math.random()*11+1);

	rednum = Math.floor(Math.random()*11+1);

	yellownum = Math.floor(Math.random()*11+1);


	// Console log each new number. just copy and paste honestly

	console.log("The Number to get is: " + randomNum);
	console.log('blue crystal is :' + bluenum);
	console.log('green crystal is :' + greennum);
	console.log('red crystal is :' + rednum);
	console.log('yellow crystal is :' + yellownum);
}

// create function to run if usertotal = numberToGet; aka player wins

function ifThePlayerWins(){
	
	playerWins++;
	$('#playerWins').text(playerWins);
	console.log (playerWins);
	alert("Winner");
	
}

// create a function to run if the usertotal > numberToGet; aka player losses

function ifThePlayerLosses (){
	
	playerLosses++;
	$('#playerLosses').text(playerLosses);
	console.log(playerLosses);
	alert("Loser");
	
}


// set up what happens when the player clicks on the blue crystal image

$('#blue').on('click', function() {

	// add bluenum to the user total
	userTotal = userTotal + bluenum;
	//console log the new total from adding blue num
	console.log(userTotal);

	// Display the new user total
	$("#userTotal1").text(userTotal);

	if (userTotal === randomNum) {
		ifThePlayerWins();
		gameReset();
	}
	else if (userTotal > randomNum) {
		ifThePlayerLosses();
		gameReset();
	}

});

// copy and paste for each pic
$('#green').on('click', function() {

	// add greennum to the user total
	userTotal = userTotal + greennum;
	//console log the new total from adding green num
	console.log(userTotal);

	// Display the new user total
	$("#userTotal1").text(userTotal);

	if (userTotal === randomNum) {
		ifThePlayerWins();
		gameReset();
	}
	else if (userTotal > randomNum) {
		ifThePlayerLosses();
		gameReset();
	}

});

$('#red').on('click', function() {

	// add rednum to the user total
	userTotal = userTotal + rednum;
	//console log the new total from adding red num
	console.log(userTotal);

	// Display the new user total
	$("#userTotal1").text(userTotal);

	if (userTotal === randomNum) {
		ifThePlayerWins();
		gameReset();
	}
	else if (userTotal > randomNum) {
		ifThePlayerLosses();
		gameReset();
	}

});

$('#yellow').on('click', function() {

	// add yellownum to the user total
	userTotal = userTotal + yellownum;
	//console log the new total from adding yellownum
	console.log(userTotal);

	// Display the new user total
	$("#userTotal1").text(userTotal);

	if (userTotal === randomNum) {
		ifThePlayerWins();
		gameReset();
	}
	else if (userTotal > randomNum) {
		ifThePlayerLosses();
		gameReset();
	}

});

});

