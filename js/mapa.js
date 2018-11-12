let marcelineEl = document.querySelector('#marceline')
let lojas = document.querySelectorAll('.loja')


for(let lojaEl of lojas)
{
	lojaEl.addEventListener('click', andar);
}

function andar(event) 
{
	// cria variável que aponta para a loja que foi clicada (lojaClicadaEl)
	let lojaClicadaEl = event.currentTarget;

	// pega o x dessa loja (lojaX) usando a propriedade offsetLeft
	let lojaX = lojaClicadaEl.offsetLeft;

	// pega o y dessa loja (lojaY) usando a propriedade offsetTop
	let lojaY = lojaClicadaEl.offsetTop;

	// define o style da marcelineEl para fazer a propriedade left apontar para lojaX + 'px' e o mesmo para y
	marcelineEl.style.left = lojaX + 'px';
	marcelineEl.style.top = lojaY + 'px';
	marcelineEl.addEventListener('transitionend', function()
	{
		let novaPagina = lojaClicadaEl.dataset.pagina;
		location.href = novaPagina;
	});

	// NO ARQUIVO CSS, criar uma transition com duração de 1s
}

