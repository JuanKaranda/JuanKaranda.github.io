alert("Hola, Bienvenido. Ingresa la cantidad que deseas retirar")
class billete
{
  constructor(n, v, c)
  {
    this.imagen = new Image;
    this.nombre = n;
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenes[this.nombre];
  }
  dibujar()
  {
    document.body.appendChild(this.imagen);
  }
  calculo()
  {
    cajita = this.valor * this.cantidad;
  }
}

var imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";
imagenes["5"] = "5.png";
imagenes["2"] = "2.png";
imagenes["1"] = "1.png";

var caja = [];
caja.push(new billete("100", 100, 5));
caja.push(new billete("50", 50, 6));
caja.push(new billete("20", 20, 10));
caja.push(new billete("10", 10, 20));
caja.push(new billete("5", 5, 25));
caja.push(new billete("2", 2, 30));
caja.push(new billete("1", 1, 50));

var entregado = [];
var papeles;
var division;
var cajita = 1435;
var resultado = document.getElementById("resultado");
var banco = document.getElementById("banco");
var money = document.getElementById("dinero");
var boton = document.getElementById("b_dinero");
var saldo = document.getElementById("b_saldo");
boton.addEventListener("click", cajero);
saldo.addEventListener("click", ver_saldo);
function cajero()
{
  if (money.value > cajita)
  {
    alert("No hay tanto dinero disponible en el cajero!!")
  }
  else
  {
    for(var b of caja)
    {
      if(money.value > 0)
      {
        division = Math.floor(money.value/b.valor);
        if(division > b.cantidad)
        {
          papeles = b.cantidad;
          entregado.push(new billete(b.valor, papeles));
          money.value = money.value - (b.valor * papeles);
          if(papeles > 0)
          {
            resultado.innerHTML += papeles + " billete de, ";
            b.dibujar();
            console.log(b.valor);
            console.log(papeles);
            cajita = cajita - (b.valor * papeles);
            if(cajita < 0)
            {
              alert("oh oh! Me he quedado sin dinero!");
            }
          }
        }
        else
        {
          papeles = division;
          entregado.push(new billete(b.valor, papeles));
          money.value = money.value - (b.valor * papeles);
          if(papeles > 0)
          {
            resultado.innerHTML += papeles + " billete de, ";
            b.dibujar();
            console.log(b.valor);
            console.log(papeles);
            cajita = cajita - (b.valor * papeles);
            if(cajita < 0)
            {
              alert("oh oh! Me he quedado sin dinero!");
            }
          }
        }
      }
    }
  }
}

function ver_saldo()
{
  banco.innerHTML += "<strong>Dinero restante en el banco:</strong> " + cajita;
}
