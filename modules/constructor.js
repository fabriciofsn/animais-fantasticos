export default function constructor(){

}

function Carro(marca, preco){
    this.marca = marca,
    this.preco = preco
}

const honda = new Carro('honda', 3000);

function Automovel(marca, precoInicial){
    this.taxa = 1.2;
    const precoFinal = precoInicial * this.taxa;
    this.marca = marca,
    this.preco = precoFinal
}


const mazda = new Automovel('Mazda', 5000);

