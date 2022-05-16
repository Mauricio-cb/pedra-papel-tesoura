let imgDireita = document.querySelector("#img-direita");
let imgEsquerda = document.querySelector("#img-esquerda");

let [pedra,papel,tesoura] = document.querySelectorAll('.escolhas');
let vencedor;

let messageVitoria = document.querySelector("#mensagem-vitoria");

pedra.addEventListener("click",(e)=>{
	e.preventDefault();
	imgEsquerda.alt = "Pedra";
	imgEsquerda.src = "Img/pedra.png";
	IAJogada();
	verificaVencedor();
})
papel.addEventListener("click",(e)=>{
	e.preventDefault();
	imgEsquerda.alt = "Papel";
	imgEsquerda.src = "Img/papel.png";

	IAJogada();
	verificaVencedor();
})
tesoura.addEventListener("click",(e)=>{
	e.preventDefault();
	imgEsquerda.alt = "Tesoura";
	imgEsquerda.src = "Img/tesoura.png";
	IAJogada();
	verificaVencedor();
})

function IAJogada(){
	let escolha = Math.round(Math.random(1)*2+1);
	if (escolha == 1) {
		imgDireita.alt = "Pedra";
		imgDireita.src = "Img/pedra.png";
		return
	}
	if (escolha == 2) {
		imgDireita.alt = "Papel";
		imgDireita.src = "Img/papel.png"
		return
	}

	if (escolha == 3) {
		imgDireita.alt = "Tesoura";
		imgDireita.src = "Img/tesoura.png"
		return
	}

}


function verificaVencedor(){
	if(imgEsquerda.alt == "Pedra" && imgDireita.alt == "Pedra"){
		vencedor = "Empate";
		messageVitoria.textContent = "Empate";
	}
	if(imgEsquerda.alt == "Pedra" && imgDireita.alt == "Papel"){
		vencedor = "Player 2";
		messageVitoria.textContent = "IA Venceu";
	}
	if(imgEsquerda.alt == "Pedra" && imgDireita.alt == "Tesoura"){
		vencedor = "Player 1";
		messageVitoria.textContent = "Player 1 Venceu";
	}
	if(imgEsquerda.alt == "Papel" && imgDireita.alt == "Pedra"){
		vencedor = "Player 1";
		messageVitoria.textContent = "Player 1 Venceu";
	}
	if(imgEsquerda.alt == "Papel" && imgDireita.alt == "Papel"){
		vencedor = "Empate";
		messageVitoria.textContent = "Empate";
	}
	if(imgEsquerda.alt == "Papel" && imgDireita.alt == "Tesoura"){
		vencedor = "Player 2";
		messageVitoria.textContent = "IA Venceu";
	}
	if(imgEsquerda.alt == "Tesoura" && imgDireita.alt == "Pedra"){
		vencedor = "Player 2";
		messageVitoria.textContent = "IA Venceu";
	}
	if(imgEsquerda.alt == "Tesoura" && imgDireita.alt == "Papel"){
		vencedor = "Player 1";
		messageVitoria.textContent = "Player 1 Venceu";
	}
	if(imgEsquerda.alt == "Tesoura" && imgDireita.alt == "Tesoura"){
		vencedor = "Empate";
		messageVitoria.textContent = "Empate";
	}

}

function mostraVencedor(){
	console.log(vencedor);
}