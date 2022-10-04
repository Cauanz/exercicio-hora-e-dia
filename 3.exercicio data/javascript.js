function Mostrar(){
  let mostradata = document.querySelector("h2#datatxt")
  
  let hoje = new Date()
  let dia = hoje.getDate()
  let mes = hoje.getMonth()
  let ano = hoje.getFullYear()

  switch(mes){
    case 0:
      mes = 1;
      break;
    case 1:
      mes = 2;
      break;
    case 2:
      mes = 3;
      break;
    case 3:
      mes = 4;
      break;
    case 4:
      mes = 5;
      break;
    case 5:
      mes = 6;
      break;
    case 6:
      mes = 7;
      break;
    case 7:
      mes = 8;
      break;
    case 8:
      mes = 9;
      break;
    case 9:
      mes = 10;
      break;
    case 10:
      mes = 11;
      break;
    case 11:
      mes = 12;
      break;
  }

  mostradata.innerHTML = (`Hoje é: ${dia}/${mes}/${ano}`)
}