// verifica no localStorage qual é a pontuação nos 4 jogos
const pontuacao = JSON.parse(localStorage.getItem('pontuacao'));

const fases = ['balada', 'shopping', 'makeup', 'hotel'];
const pontuacoesMinimas = [150, 200, 250, 300];

for (let fase of fases) {
  pontuacao[fase] = pontuacao[fase] || 0;
}

// pontuacao = {
//   balada: 40,
//   shopping: 30,
//   makeup: 0,
//   hotel: 1
// };


fases.forEach(atualizaPontuacaoNoModal);

function atualizaPontuacaoNoModal(fase) {
  const modalConsquistasEl = document.querySelector('#modal-' + fase);
  modalConsquistasEl.querySelector('#' + fase + ' .pontuacao').innerHTML = pontuacao[fase];
}



// let botaoBaladaEl = document.querySelector('#modal-balada');
function verificaPatrocinio(fase, pontuacaoMinima)
{
	let gifBaladaEl = document.querySelector('#modal-' + fase + ' .fase img');

	if (pontuacao[fase] >= pontuacaoMinima) 
	{
		gifBaladaEl.src = 'imgs/' + fase + '_conquista.gif';
	}

}


for(let i = 0; i < fases.length; i++)
{
	verificaPatrocinio(fases[i], pontuacoesMinimas[i]);
}