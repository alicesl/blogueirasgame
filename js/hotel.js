let tiposDeObjetos =
[
	{
		arquivo: 'imgs/hotel/bola_hotel.png',
		pontuacao: 1
	},

	{
		arquivo: 'imgs/hotel/cama_hotel.png',
		pontuacao: 3
	},

	{
		arquivo: 'imgs/hotel/flor_hotel.png',
		pontuacao: 0
	},

	{
		arquivo: 'imgs/hotel/piscina_hotel.png',
		pontuacao: 3
	},

	{
		arquivo: 'imgs/hotel/planta_hotel.png',
		pontuacao: 0
	},

	{
		arquivo: 'imgs/hotel/sol_hotel.png',
		pontuacao: 2
	},

	{
		arquivo: 'imgs/hotel/sorvete_hotel.gif',
		pontuacao:2
	},

	{
		arquivo: 'imgs/hotel/taca_hotel.png',
		pontuacao: 1
	},

	{
		arquivo: 'imgs/hotel/celular.gif',
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
			pontuacaoEl.innerHTML = pontuacao  + "/200";
			new Audio('audios/coin.wav').play();
		});
}

setInterval(surgirObjeto, 500);

function fimDoJogo()
{
	let recadoEl = document.createElement('h2');
	if (pontuacao >= 200)
	{
		alert('Parabéns! Você conseguiu o patrocínio do Platina Minas')
		recadoEl.innerHTML = 'Parabéns! Você conseguiu o patrocínio do Platina Minas'
		document.body.appendChild(recadoEl);
	}

	else
	{
		alert('Você não conseguiu o patrocínio do Platina Minas, tente de novo!')
		recadoEl.innerHTML = 'Você não conseguiu o patrocínio do Platina Minas, tente de novo!'
		document.body.appendChild(recadoEl);
	}

	pontuacaoEl.value = pontuacao;

	atualizaPontuacao('hotel', pontuacao); //	localStorage.setItem('pontuacao', JSON.stringify(pontuacao));

	location.href = 'mapa.html';
}
