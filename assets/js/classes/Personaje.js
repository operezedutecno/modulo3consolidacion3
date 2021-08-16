class Personaje {
    constructor(nombre, img, poder, raza){
        let _nombre = nombre;
        let _img = img;
        let _poder = poder;
        let _raza = raza;

        this.getNombre = () => _nombre;
        this.getImg = () => _img;
        this.getPoder = () => _poder;
        this.getRaza = () => _raza;

        this.setPoder = (nuevoPoder) => _poder = nuevoPoder;
    }

    get Nombre(){
        return this.getNombre();
    }

    get Img(){
        return this.getImg();
    }

    get Poder(){
        return this.getPoder();
    }

    get Raza(){
        return this.getRaza();
    }

    set Poder(nuevoPoder){
        this.setPoder(nuevoPoder);
    }
}

export default Personaje;