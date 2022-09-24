function Mostrar(){
  let mostrahora = document.querySelector("h2#horatxt")
  let mostradia = document.querySelector("h2#diatxt")
  
  let hoje = new Date()
  let dia = hoje.getDay()
  let hora = hoje.getHours()
  let minutos = hoje.getMinutes()
  
  switch(dia){
    case 1:
      mostradia.innerHTML = (`Hoje é Segunda-feira`)
      break;
    case 2:
      mostradia.innerHTML = (`Hoje é Terça-feira`)
      break;
    case 3:
      mostradia.innerHTML = (`Hoje é Quarta-feira`)
      break;
    case 4:
      mostradia.innerHTML = (`Hoje é Quinta-feira`)
      break;
    case 5:
      mostradia.innerHTML = (`Hoje é Sexta-feira`)
      break;
    case 6:
      mostradia.innerHTML = (`Hoje é Sabado`)
      break;
    case 7:
      mostradia.innerHTML = (`Hoje é Domingo`)
  }

  /*mostradia.innerHTML = (`Hoje é ${dia}`)*/
  mostrahora.innerHTML = (`Agora são ${hora}&#58;${minutos}`)
}