  function Mostrar(){
    let res = document.getElementById("resulttxt")
    for(let ano = 2014; ano <= 2050; ano++){
      let d = new Date(ano, 0, 1)
      if (d.getDay() === 0){
        res.innerHTML = (`O dia 1 de janeiro é domingo no ano:`)
        let item = document.createElement('option')
        item.text = `${ano}`
        res.appendChild(item);
      }
    }
  }