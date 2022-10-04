  function Calcular(){
    let lado1 = document.getElementById("ladoA")
    let lado2 = document.getElementById("ladoB")
    let lado3 = document.getElementById("ladoC")
    let res = document.getElementById("resulttxt")
    
    lado1 = parseInt(lado1.value)
    lado2 = parseInt(lado2.value)
    lado3 = parseInt(lado3.value)

    let p = (lado1 + lado2 + lado3) / 2
    let a = Math.sqrt(p*((p - lado1)*(p - lado2)*(p - lado3)))

    /*res.innerHTML = (`O resultado e: ${b}`)*/

    res.innerHTML = (`A área do triangulo com lados ${lado1} e ${lado2} e ${lado3} é ${a}`)
  }