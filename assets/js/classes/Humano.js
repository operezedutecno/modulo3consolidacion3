import Personaje from './Personaje.js';

class Humano extends Personaje{
    constructor(nombre, img, poder, raza){
        super(nombre, img, poder,raza);
    }

    Coraje(){
        this.Poder(this.Poder * 1.20);
    }
}

export default Humano;