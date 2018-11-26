let tiposDeObjetos =
[
	{
		arquivo: 'imgs/balada/cd_balada.gif',
		pontuacao: 1
	},

	{
		arquivo: 'imgs/balada/globo_balada.gif',
		pontuacao: 3
	},

	{
		arquivo: 'imgs/balada/garrafa1_balada.png',
		pontuacao: 2
	},

	{
		arquivo: 'imgs/balada/garrafa2_balada.png',
		pontuacao: 2
	},

	{
		arquivo: 'imgs/balada/notas1_balada.gif',
		pontuacao: 0
	},

	{
		arquivo: 'imgs/balada/notas2_balada.gif',
		pontuacao: 0
	},

	{
		arquivo: 'imgs/balada/taca_balada.png',
		pontuacao: 1
	},

	{
		arquivo: 'imgs/balada/celular.gif',
		pontuacao: 5
	}
];


let pontuacao = 0;
let pontuacaoEl = document.querySelector('#pontuacao');
function surgirObjeto ()
{
	let indiceDoObjetoSorteado = Math.floor(Math.random()*tiposDeObjetos.length);
	let objetoSorteado = tiposDeObjetos[indiceDoObjetoSorteado];
	let objetoEl = document.createElement('img');
	objetoEl.src = objetoSorteado.arquivo;
	let posicaoX = Math.random()*(window.innerWidth-60);
	objetoEl.classList.add('objeto');
	objetoEl.style.left = posicaoX + 'px';
	objetoEl.style.top = '-60px';
	document.body.appendChild(objetoEl);
	setTimeout(function()
		{
			objetoEl.style.top = '100%';

		},100);

	objetoEl.addEventListener('transitionend', function(event)
	{
		event.currentTarget.remove();
	});

	objetoEl.addEventListener('click', function(event)
		{
			pontuacao+= objetoSorteado.pontuacao;
			event.currentTarget.remove();
			pontuacaoEl.innerHTML = pontuacao + "/150";
			new Audio('audios/coin.wav').play();
		});
}

setInterval(surgirObjeto, 500);

function fimDoJogo()
{
	//let recadoEl = document.createElement('h2');
	if (pontuacao >= 150)
	{
		alert('Parabéns! Você conseguiu o patrocínio da Little Balada')
		//recadoEl.innerHTML = 'Parabéns! Você conseguiu o patrocínio da Little Balada'
		//document.body.appendChild(recadoEl);
	}

	else
	{
		alert('Você não conseguiu o patrocínio da Little Balada, tente de novo!')
		//recadoEl.innerHTML = 'Você não conseguiu o patrocínio da Little Balada, tente de novo!'
		//document.body.appendChild(recadoEl);
	}

	pontuacaoEl.value = pontuacao;

  atualizaPontuacao('balada', pontuacao); //	localStorage.setItem('pontuacao', JSON.stringify(pontuacao));


	location.href = 'mapa.html';
}

setTimeout(fimDoJogo, 90000);
