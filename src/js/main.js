/** @format */
const btn = document.querySelector('.btn');
const result = document.querySelector('.panel-result p');
const inputX2 = document.getElementById('x2');
const inputX = document.getElementById('x');
const inputZ = document.getElementById('z');
const span = document.querySelector('span');

let choiceX2 = 0;
let choiceX = 0;
let choiceZ = 0;
let delta = 0;
let x1 = 0;
let x2 = 0;


const quadraticEquation = e => {
	choiceX2 = +inputX2.value;
	choiceX = +inputX.value;
	choiceZ = +inputZ.value;
	console.log(choiceZ);
	span.textContent = `Rozwiązanie równania kwadratowego ${choiceX2}x^2 + ${choiceX}x + ${choiceZ} = 0 wynosi:`;
	if (choiceX2 === 0) {
		alert('To nie jest równanie kwadratowe');
		return;
	}
	delta = Math.pow(choiceX, 2) - 4 * choiceX2 * choiceZ;
	if (delta < 0) {
		result.classList.remove('two');
		result.classList.remove('one');
		result.classList.add('wrong');
		result.textContent = 'Delta jest mniejsza niż 0. Równanie nie posiada pierwiastków rzeczywistych';
	} else if (delta > 0) {
		result.classList.remove('wrong');
		result.classList.remove('one');
		result.classList.add('two');
		x1 = -((Math.pow(choiceX, 2) - Math.sqrt(delta)) / 2) * choiceX2;
		x2 = -(((choiceX + Math.sqrt(delta)) / 2) * choiceZ);
		result.textContent = `Delta jest większa od zera. Równanie posiada dwa miejsca zerowe. X1 wynosi: ${x1.toFixed(
			2
		)} a X2 wynosi ${x2.toFixed(2)}`;
	} else if (delta === 0) {
		result.classList.remove('two');
		result.classList.remove('wrong');
		result.classList.add('one');
		x1 = -(choiceX / (2 * choiceX2));
		result.textContent = `Delta jest równa 0. Równanie posiada jedno miejsce zerowe X0, które wynosi: ${x1}`;
	}

	inputX2.value = 0;
	inputX.value = 0;
	inputZ.value = 0;
};

btn.addEventListener('click', quadraticEquation);
