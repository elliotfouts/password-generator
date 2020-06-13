const specialCheckbox = document.querySelector('.special');
const numbersCheckbox = document.querySelector('.numbers');
const uppercaseCheckbox = document.querySelector('.uppercase');
const lowercaseCheckbox = document.querySelector('.lowercase');

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '!/#%$&*@+=-.:;{}';
var numbers = '1234567890';

var alphabetArr = alphabet.split('');
var capitalAlphabetArr = capitalAlphabet.split('');
var specialCharArr = specialChar.split('');
var numbersArr = numbers.split('');

function generatePassword() {
	var passwordLength = slider.value;
	var password = '';

	//holds the selected character types
	var passwordCharacters = [];

	//checks to see which characters will be used and pushes those arrays into passwordCharacters
	if (
		numbersCheckbox.checked == false &&
		lowercaseCheckbox.checked == false &&
		uppercaseCheckbox.checked == false &&
		specialCheckbox.checked == false
	) {
		document.querySelector('.password-criterea-caption').innerText = 'please select at least one character type';
		document.querySelector('.password-criterea-caption').style.color = '#FF331F';
		return;
	}
	if (lowercaseCheckbox.checked) {
		passwordCharacters.push(...alphabetArr);
	}
	if (uppercaseCheckbox.checked) {
		passwordCharacters.push(...capitalAlphabetArr);
	}
	if (specialCheckbox.checked) {
		passwordCharacters.push(...specialCharArr);
	}
	if (numbersCheckbox.checked) {
		passwordCharacters.push(...numbersArr);
	}

	for (let i = 0; i < passwordLength; i++) {
		//generating a index for each array
		let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
		password += passwordCharacters[randomIndex];
	}
	//prints password to user's screen
	document.querySelector('#password-display').value = password;
}
