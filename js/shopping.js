let tiposDeObjetos =
[
	{
		arquivo: 'imgs/shopping/batata_shopping.png',
		pontuacao: 0
	},

	{
		arquivo: 'imgs/shopping/blusa_shopping.png',
		pontuacao: 3
	},

	{
		arquivo: 'imgs/shopping/calca_shopping.png',
		pontuacao: 4
	},

	{
		arquivo: 'imgs/shopping/celular.gif',
		pontuacao: 5
	},

	{
		arquivo: 'imgs/shopping/diamante_shopping.png',
		pontuacao: 3
	},
	
	{
		arquivo: 'imgs/shopping/donut_shopping.gif',
		pontuacao: 2
	}, 

	{
		arquivo: 'imgs/shopping/jogo_shopping.png',
		pontuacao: 4
	}, 

	{
		arquivo: 'imgs/shopping/oculos_shopping.png',
		pontuacao: 3
	}, 

	{
		arquivo: 'imgs/shopping/presente_shopping.png',
		pontuacao: 2
	}, 

	{
		arquivo: 'imgs/shopping/sanduiche_shopping.png',
		pontuacao: 0
	}, 

	{
		arquivo: 'imgs/shopping/sapato_shopping.png',
		pontuacao: 3
	},

	{
		arquivo: 'imgs/shopping/sacola1_shopping.png',
		pontuacao: 1
	},

	{
		arquivo: 'imgs/shopping/sacola2_shopping.png',
		pontuacao: 1
	},

	{
		arquivo: 'imgs/shopping/sacola3_shopping.png',
		pontuacao: 1
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
			pontuacaoEl.innerHTML = pontuacao;
			new Audio('audios/coin.wav').play();
		});
}


setInterval(surgirObjeto, 500);

function fimDoJogo()
{
	let recadoEl = document.createElement('h2');
	if (pontuacao >= 150)
	{
		alert('Parabéns! Você conseguiu o patrocínio do Shopping')
		recadoEl.innerHTML = 'Parabéns! Você conseguiu o patrocínio do Shopping'
		document.body.appendChild(recadoEl);
	}

	else
	{
		alert('Você não conseguiu o patrocínio do Shopping, tente de novo!')
		recadoEl.innerHTML = 'Você não conseguiu o patrocínio do Shopping, tente de novo!'
		document.body.appendChild(recadoEl);
	}

	pontuacaoEl.value = pontuacao;

  	localStorage.setItem('pontuacao', JSON.stringify(pontuacao));
	
	
	location.href = 'mapa.html';
}

setTimeout(fimDoJogo, 90000);
