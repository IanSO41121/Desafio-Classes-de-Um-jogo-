class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo 
    }
    atacar(){
        let ataque;
        if(this.tipo === "guerreiro"){
            ataque = "espada"
        }else if (this.tipo === "mago"){
            ataque = "magia"
        }else if (this.tipo === "monge"){
            ataque = "artes marciais"
        }else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }else{
            return null;
        }
        return `o ${this.tipo} atacou usando ${ataque}`
    }
}
const guerreiro = new heroi("Arthur", 30, "guerreiro");
const mago = new heroi("Merlin", 80, "mago");
const monge = new heroi("Kai", 25, "monge");
const ninja = new heroi("Akira", 22, "ninja");

const herois = [guerreiro, mago, monge, ninja];

for (const heroi of herois) {
    console.log(heroi.atacar());
}