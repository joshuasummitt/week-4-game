$(document).ready(function() {
	crystals = ['assets/inages/black.jpeg', 'assets/inages/blue.jpeg', 'assets/inages/gray.jpeg', 'assets/inages/white.jpeg'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);

	newCrystals();
	newGame(),

	function new() {
		// body...
		var numbers = []
			while(numbers.length < 4){
				var randomnumber = Math.ceil(Math.random()*12)
				var found = false;
				for (numbers[i] == randomnumber){
					if (numbers[i] == randomnumber){
						found = true; break
					}
				}
				if(|found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);
		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);

		}
	}

	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);

		$('#crystals').on('click', function(){
			counter = counter + parseInt ($(this).data('num'));

			$('#yourScore').text(counter);

			if (counter == numberToGuess){
				$('#status').text("You've Won!");
				wins ++;
				$('#win').text(wins);
				console.log(wins)
				$('#crystals').empty();
				newCrystals();
				newGame();
			} else if ( counter > numberToGuess){
				$('status').text("You've Lost.")
				losses ++;
				$('#loss').text(losses);
				console.log(losses);
				$('#crystals').empty();
				newCrystals();
				newGame();
			}
		});
	}
});