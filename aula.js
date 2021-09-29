//Criado por Vinícius Gabriel
//criado usando POO
//criação da classe 
class Pessoa {
    //criação do construtor e seus atributos
    constructor(nome, sobrenome, anoNascimento) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.anoNascimento = anoNascimento;
    }
    //criação do método
    calculaIdade(){
        return(2021 - this.anoNascimento)
    }
   
  }
  //meu objeto que exibirá seu nome concatenado com o sobrenome, além do cálculo da sua idade
  eu = new Pessoa("vinicius", "melo", 2004)
  console.log(`Olá ${eu.nome} ${eu.sobrenome}`)
  console.log(`Neste ano você completa ${eu.calculaIdade()} anos`)
  
      
  