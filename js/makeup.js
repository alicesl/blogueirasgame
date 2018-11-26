let tiposDeObjetos =
[
	{
		arquivo: 'imgs/makeup/batom1_makeup.png',
		pontuacao: 4
	},

	{
		arquivo: 'imgs/makeup/batom2_makeup.png',
		pontuacao: 4
	},

	{
		arquivo: 'imgs/makeup/blush_makeup.png',
		pontuacao: 2
	},

		{
		arquivo: 'imgs/makeup/esmalte_makeup.png',
		pontuacao: 3
	},

	{
		arquivo: 'imgs/makeup/perfume_makeup.png',
		pontuacao: 2
	},

	{
		arquivo: 'imgs/makeup/pincel1_makeup.png',
		pontuacao: 0
	},

	{
		arquivo: 'imgs/makeup/pincel2_makeup.jpg',
		pontuacao: 0
	},

	{
		arquivo: 'imgs/makeup/sombra_makeup.jpg',
		pontuacao: 2
	},

	{
		arquivo: 'imgs/makeup/sacola1_makeup.png',
		pontuacao: 1
	},

	{
		arquivo: 'imgs/makeup/sacola2_makeup.png',
		pontuacao: 1
	},

	{
		arquivo: 'imgs/makeup/sacola3_makeup.png',
		pontuacao: 1
	},

	{
		arquivo: 'imgs/makeup/celular.gif',
		pontuacao: 5
	},
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
			pontuacaoEl.innerHTML = pontuacao  + "/250";
			new Audio('audios/coin.wav').play();
		});
}


setInterval(surgirObjeto, 500);

function fimDoJogo()
{
	let recadoEl = document.createElement('h2');
	if (pontuacao >= 250)
	{
		//alert('Parabéns! Você conseguiu o patrocínio da Makeup Maquiagens')
		recadoEl.innerHTML = 'Parabéns! Você conseguiu o patrocínio da Makeup Maquiagens'
		document.body.appendChild(recadoEl);
	}

	else
	{
		//alert('Você não conseguiu o patrocínio da da Makeup Maquiagens, tente de novo!')
		recadoEl.innerHTML = 'Você não conseguiu o patrocínio da Makeup Maquiagens, tente de novo!'
		document.body.appendChild(recadoEl);
	}

	pontuacaoEl.value = pontuacao;

  	atualizaPontuacao('balada', pontuacao); //	localStorage.setItem('pontuacao', JSON.stringify(pontuacao));


	location.href = 'mapa.html';
}
setTimeout(fimDoJogo, 90000);
