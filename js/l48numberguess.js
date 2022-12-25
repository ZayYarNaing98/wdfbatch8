// UI

const minnum = document.querySelector('.minnumber'),
		maxnum = document.querySelector('.maxnumber'),
		getinput = document.querySelector('#guessnumber'),
		getbtn = document.querySelector('#btn'),
		message1 = document.querySelector('.message1'),
		message2 = document.querySelector('.message2');

let min = 1,
	max = 10,
	gameleft = 3,
	winningnum = 7;

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener('click',function()
{
	// console.log('i am working');
	// console.log(getinput.value);
	// console.log(typeof getinput.value);

	// let guess = Number(getinput.value);
	// let guess = +getinput.value;
	let guess = parseInt(getinput.value);

	// console.log(guess);
	// console.log(typeof guess);

	if(guess < min || guess > max || isNaN(guess)) {
		// console.log(`Please enter a number between ${min} to ${max}`);
		// message2.textContent = `Please enter a number between ${min} to ${max}`;
		setmessage2(`Please enter a number between ${min} to ${max}`,"red");
	}

	if(guess === winningnum){
	// Gameover WON

	// disabled getinput
	getinput.disabled = true;

	// getinput border color to green
	getinput.style.borderColor = "green";

	// message 1
	message1.textContent = `${winningnum} is correct!!!`,
	message1.style.color = "green";

	// play agiain?
	getbtn.value = "Play Again";
	
	}else{

	// Wrong Number

	// gameleft -= 1;
	
	gameleft--;

	// console.log(gameleft);

	if(gameleft === 0){

		// Gameover LOSE

		// disable getinput
		getinput.disabled = true;

		// getinput border color to red
		getinput.style.borderColor = "red";

		// message 1
		message1.textContent = `Game Over, You Lost, The correct answer is ${winningnum}`;
		message1.style.color = "red";

		// play again ?
		getbtn.value = 'Play Again';

	}else{
		// Continue Game

		// getinput border color to red
		getinput.style.borderColor = "red";

		// message1
		message1.innerText = `${guess} is not correct, ${gameleft} guess left`;
		message1.style.color = "blue";

		// clear getinput old value
		getinput.value = "";
	}
}

});



// Message

function setmessage2(msg,color)
{
	message2.innerText = msg;
	message2.style.color = color;

	setTimeout(function(){
		message2.textContent = '';
	},2000);
}


