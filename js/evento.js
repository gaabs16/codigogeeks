const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const formulario = document.getElementById('formulario');

signUpButton.addEventListener('click', () => {
	formulario.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	formulario.classList.remove("right-panel-active");
});

const card1 = document.querySelector('.card1__inner');
const card2 = document.querySelector('.card2__inner');
const card3 = document.querySelector('.card3__inner');

card1.addEventListener("mouseover", () => {
	card1.classList.toggle('is-flipped');
});

card1.addEventListener("mouseout", () => {
	card1.classList.toggle('is-flipped');
});

card2.addEventListener("mouseover", () => {
	card2.classList.toggle('is-flipped');
});

card2.addEventListener("mouseout", () => {
	card2.classList.toggle('is-flipped');
});

card3.addEventListener("mouseover", () => {
	card3.classList.toggle('is-flipped');
});

card3.addEventListener("mouseout", () => {
	card3.classList.toggle('is-flipped');
});

// botao

function Evento(){
    alert('enviado');
}

// CEP

function limpa_formulário_cep() {
	//Limpa valores do formulário de cep.
	document.getElementById('rua').value=("");
	document.getElementById('bairro').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
	//Atualiza os campos com os valores.
	document.getElementById('rua').value=(conteudo.logradouro);
	document.getElementById('bairro').value=(conteudo.bairro);
} //end if.
else {
	//CEP não Encontrado.
	limpa_formulário_cep();
	alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

	//Expressão regular para validar o CEP.
	var validacep = /^[0-9]{8}$/;

	//Valida o formato do CEP.
	if(validacep.test(cep)) {

		//Preenche os campos com "..." enquanto consulta webservice.
		document.getElementById('rua').value="...";
		document.getElementById('bairro').value="...";

		//Cria um elemento javascript.
		var script = document.createElement('script');

		//Sincroniza com o callback.
		script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

		//Insere script no documento e carrega o conteúdo.
		document.body.appendChild(script);

	} //end if.
	else {
		//cep é inválido.
		limpa_formulário_cep();
		alert("Formato de CEP inválido.");
	}
} //end if.
else {
	//cep sem valor, limpa formulário.
	limpa_formulário_cep();
}
};
