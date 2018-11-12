let botoes = document.querySelectorAll('.modal-trigger');
for(let i = 0; i < botoes.length; i++ ){
	botoes[i].addEventListener('click',function(e){
		let botaoclicadoEl = e.currentTarget;
		let idModal = botaoclicadoEl.dataset.modal;
		let modalEl = document.querySelector('#' + idModal);
		modalEl.classList.add('aparecer');
	});
}

let fechar = document.querySelector('#fechar');
fechar.addEventListener('click',function(e){

	e.currentTarget.parentElement.classList.remove('aparecer');
});
