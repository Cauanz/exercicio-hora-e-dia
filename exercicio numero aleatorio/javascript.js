  
    let numaleatorio = parseInt(Math.random() * 50)

  function Verificar(){
    let res = document.querySelector("h2#resulttxt")

    let num1 = document.getElementById("palpite")
    
    if(num1.value < numaleatorio){
      res.innerHTML = ("Seu palpite esta baixo")
    } else if (num1.value > numaleatorio){
      res.innerHTML = ("Seu palpite esta alto")
    } else if (num1.value == numaleatorio){
      res.innerHTML = ("Voce acertou!!!")
      num1 = '';
      numaleatorio = 0;
    }

  }