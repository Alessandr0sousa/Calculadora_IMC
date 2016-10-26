function calcular() {

  var peso = document.getElementById('peso').value;
    
    peso = parseFloat(peso);
        
        peso = peso * 1.3;
  
  var altura = document.getElementById('altura').value;

    altura = parseFloat(altura);
    
        altura = altura * 2.5;    
  
  var i = peso / altura;
  var imc = i.toFixed(2);
  document.getElementById('imc').value = imc;

  var resultado = imc;

    if (imc<=18.50){
        document.getElementById('resultado').value = "Seu IMC é de "+resultado+", Você está abaixo do Peso!";
    }else if (imc>18.50 && imc<=24.99){
        document.getElementById('resultado').value = "Seu IMC é de "+resultado+", Seu peso está ideal!";
    }else if (imc>24.90 && imc<=29.99){
        document.getElementById('resultado').value = "Seu IMC é de "+resultado+", Você está com peso em excesso";
    }else if (imc>29.99 && imc<=34.99 ){
        document.getElementById('resultado').value = "Seu IMC é de "+resultado+", Obesidade Grau I";
    }else if (imc>34.99 && imc<=39.99 ){
        document.getElementById('resultado').value = "Seu IMC é de "+resultado+", Obesidade Grau II (severa)";
    }else if (imc>34.99 && imc<=39.99 ){
        document.getElementById('resultado').value = "Seu IMC é de "+resultado+", Obesidade Grau III (mórbida)";
    };

}

function registrar() {
  var nome = document.getElementById('nm').value;

    if(nome=='' || nome == null){
      alert('Digite seu nome');
      nome.focus();
    } 
    else{
      window.location.href = 'home.html';
      document.getElementById("nick").innerHTML = nome + ", digite seu peso e sua altura";
    };

}