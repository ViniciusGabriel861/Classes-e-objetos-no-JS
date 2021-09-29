//Criado por Vinícius Gabriel
//criado usando POO
//criação da classe 
class Poligono {
    //criação do construtor e seus atributos
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
    //criação dos métodos
    somar(){
        return(this.base + this.altura)
    }
    area(){
        return(this.base * this.altura)
    }
  }
  //meu objeto que exibirá a soma de sua base e altura, além do calculo da área.
  quadrado = new Poligono(4, 2)
  console.log(quadrado.somar())
  console.log(quadrado.area())
  