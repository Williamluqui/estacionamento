


btnRegistro.addEventListener("click", ()=>{
  
  entradaVeiculos();
});

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
  carro = {
    modelo:modelo,
    placa:placa,
    hora:relogio(),
    
  }
  
  if(localStorage.getItem('patio') === null){
    let carros =[];
    carros.push(carro);
    localStorage.setItem('patio', JSON.stringify(carros))
   
   
  }else{
    let carros = JSON.parse(localStorage.getItem('patio'));
    carros.push(carro);
    localStorage.setItem('patio', JSON.stringify(carros));
    
    sucesso.innerHTML = 'Adicionado com Sucesso !';
    sucesso.style.background = 'green';
    
  }
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
   remover.style.background = 'red';
   
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
 
                               