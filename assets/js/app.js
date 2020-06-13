const slider = document.querySelector('#myRange');
const sliderValueDisplay = document.querySelector('#slider-value-display');

//each time slider is moved, the value will update
sliderValueDisplay.innerHTML = slider.value;
slider.oninput = () => {
	sliderValueDisplay.textContent = slider.value;
};

//calls function to generate password when generate-password is clicked
var generateButton = document.querySelector('.generate-password');
generateButton.addEventListener('click', generatePassword);

function copyText() {
	const textToCopy = document.querySelector('#password-display');
	console.log(textToCopy);
	textToCopy.select();
	document.execCommand('copy');
	document.querySelector('.password-criterea-caption').innerText = 'password has been copied to clipboard!';
	document.querySelector('.password-criterea-caption').style.color = '#657ED4';
}

const copy = document.querySelector('.clipboard-copy');
copy.addEventListener('click', copyText);
