class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  
  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        console.log(`O ${this.tipo} ${this.nome} não fez nada, porque não sabe atacar.`);
        return;
    }
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }

  curar() {
    let cura = "";
    switch (this.tipo) {
      case "mago":
        cura = "poção";
        break;
      case "guerreiro":
        cura = "carne enlatada";
        break;
      case "monge":
        cura = "artes ancestrais";
        break;
      case "ninja":
        cura = "ervas";
        break;
      default:
        console.log(`O ${this.tipo} ${this.nome} não fez nada, porque não sabe se curar.`);
        return;
    }
    console.log(`O ${this.tipo} ${this.nome} se curou usando ${cura}`);
  }
}

let monge = new Heroi("Jean", 50, "monge");
monge.atacar();
monge.curar();

let senhorDasTrevas = new Heroi('Valdmort', 58, 'Bruxo');
senhorDasTrevas.atacar()
senhorDasTrevas.curar()