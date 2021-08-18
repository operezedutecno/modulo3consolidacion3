import Personaje from './Personaje.js';

class Saiyajin extends Personaje{
    constructor(nombre, img, poder,raza){
        super(nombre, img, poder, raza);
    }

    Transformacion(){
        this.setPoder(this.Poder * 1.80);
    }
}

export default Saiyajin;