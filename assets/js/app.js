


btnRegistro.addEventListener("click", ()=>{
  
  patioCheio();
  
});
/* == HORA == */
let relogio = () => {
 let data = new Date(); // obrigatorio para puxar a hora
  let hora = data.getHours(); // marcacao horario
  let min = data.getMinutes();
  // ajustar 0 dos minutos ,horas e segundos
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (min < 10) {
    min = "0" + min;
  }
  return `${hora}:${min}`
}

function entradaVeiculos(){
    let placa = document.getElementById("placa").value;
    let modelo = document.getElementById("modelo").value;
    const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
    const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
    if (!modelo || !placa) {
      sucesso.innerHTML = 'Preencha todos os campos ! ';
      sucesso.style.background = 'rgb(247, 91, 91)';
      return false;
    }else if(regexPlaca.test(placa) == false && regexPlacaMercosulCarro.test(placa) == false){
      sucesso.innerHTML = 'Placa Inválida !';
      sucesso.style.background = 'rgb(247, 91, 91)';
      return false;
    }
      
    
    
  carro = {
    modelo:modelo,
    placa:placa,
    hora:relogio(),
   
  }
  if(localStorage.getItem('patio') === null){
    let carros =[];
    carros.push(carro);
    localStorage.setItem('patio', JSON.stringify(carros));
  
  }
    
    let carros = JSON.parse(localStorage.getItem('patio'));
    carros.push(carro);
    localStorage.setItem('patio', JSON.stringify(carros));
    sucesso.innerHTML = 'Adicionado com Sucesso !';
    sucesso.style.background = 'rgb(86, 216, 81)';
    document.getElementById('cadastro').reset(); 
  
  }
  
function apagarVeiculo(placa){
let carros = JSON.parse(localStorage.getItem('patio'));
 for(let i = 0; i < carros.length; i++){
   if(carros[i].placa == placa){
     carros.splice(i, 1); // splice remove
     
   }
   
   localStorage.setItem('patio',JSON.stringify(carros));
   remover.innerHTML = 'Carro removido do Patío!';
   remover.style.background = 'rgb(247, 91, 91)';
 }
mostraPatio()
}    
function mostraPatio(){
  let carros = JSON.parse( localStorage.getItem('patio'));
  let carrosResultado = document.getElementById('resultados');
  carrosResultado.innerHTML = '';   
  for(let i = 0 ; i < carros.length;i++){
    let modelo = carros[i].modelo;
    let placa = carros[i].placa;
    let hora = carros[i].hora;
    carrosResultado.innerHTML += '<tr><td>' + placa +
                                   '</td><td>'+ modelo +
                                   '</td><td>' + hora +
                                   '</td><td><button class="finalizar" onclick="apagarVeiculo(\''+placa+'\')">Excluir</button></td>' +
                                   '</tr>';
     }
}

function patioCheio(){
  let vagas = 10;
  let carros = JSON.parse( localStorage.getItem('patio'));
  if( carros.length + 1 > vagas){
    sucesso.innerHTML = 'Estacionamento cheio ! <br> Limite de 10 Vagas atingidas ';
    sucesso.style.background = 'rgb(247, 91, 91)';
    return false;
    
  }
  entradaVeiculos();
}

// function validarPlaca(placa){
 
//   const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
//   const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
//   const regexPlacaMercosulMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
//   if(regexPlaca.test(placa)){
//   resposta = "Placa válida no formato atual";
//   }
//   if(regexPlacaMercosulCarro.test(placa)){
//   resposta = "Placa válida (padrão Mercosul - carro)";
//   }
//   if(regexPlacaMercosulMoto.test(placa)){
//   resposta = "Placa válida (padrão Mercosul - moto)";
//   }
//   return resposta;
//  }
//  console.log("teste");
//  console.log(validarPlaca("ABC1234"));
//  console.log(validarPlaca("ABC12356"));
//  console.log(validarPlaca("ABC12D5"));
//  console.log(validarPlaca("ABC1D15"));
//  console.log(validarPlaca("ABC12D51"));