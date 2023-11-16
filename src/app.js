function handleEnterKey(event, nextInputId) {
	if (event.key == 'Enter') {
		console.log(this.key);
		event.preventDefault();
		document.getElementById(nextInputId).focus();
	}
}

const petition = document.getElementById('petition');
const answer = document.getElementById('answer');
const button = document.getElementById('button');
const display = document.getElementById('display');

petition.addEventListener('input', (event) => {
	if (event.target.value.includes('.')) {
		answer.focus();
	}
});

button.addEventListener('click', () => {
	let value = answer.value;
	display.innerText = value;
});
