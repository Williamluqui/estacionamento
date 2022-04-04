let horario = document.getElementById("hora");


btnRegistro.addEventListener("click", ()=>{
  
  entradaVeiculos()
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
   
   
   
  //  return hora.innerHTML = `Horario de Brasilia <p> ${horario} `;
   
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
    localStorage.setItem('patio', JSON.stringify(carros))
    sucesso.innerHTML = 'Adicionado com Sucesso !';
    sucesso.style.background = 'green';
  }
   

} 
    