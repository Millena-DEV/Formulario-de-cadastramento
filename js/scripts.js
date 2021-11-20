function validar() {
	
	
	validaNome();
	validaSalario();
	validaSexo();
	validaemail();
	validadtnasc();
	validafilhos();
	
	var resultado = document.getElementById("resultado").innerHTML;
	
	if (resultado.length() <= 0)
		alert("Processamento com sucesso");
	else
		alert(resultado);
}

function validaNome(){
	
	var firstname = document.getElementById("firstname").value;

	//alert(firstname);
}
required(input){
  
	let inputValue = input.value;

	if(inputValue === '') {
	  let errorMessage = `Este campo é obrigatório`;

	  this.printMessage(input, errorMessage);
	}
}
emailvalidate(input) {
	let re = /\S+@\S+\.\S+/;

	let email = input.value;

	let errorMessage = `Insira um e-mail no padrão matheus@email.com`;

	if(!re.test(email)) {
	  this.printMessage(input, errorMessage);
	}

  }