  function Verificar(){
    let ano = document.querySelector("input#ano")
    let res = document.querySelector("h2#resulttxt")

    if(ano.value % 4 == 0 && ano.value != 00){
      res.innerHTML = ("O ano é bissexto")
    } else {
      res.innerHTML = ("O ano não é bissexto")
    }
  }