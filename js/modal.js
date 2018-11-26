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

let fechar2 = document.querySelector('#fechar2');
fechar2.addEventListener('click',function(e){

	e.currentTarget.parentElement.classList.remove('aparecer');
});

let fechar3 = document.querySelector('#fechar3');
fechar3.addEventListener('click',function(e){

	e.currentTarget.parentElement.classList.remove('aparecer');
});

let fechar4 = document.querySelector('#fechar4');
fechar4.addEventListener('click',function(e){

	e.currentTarget.parentElement.classList.remove('aparecer');
});

