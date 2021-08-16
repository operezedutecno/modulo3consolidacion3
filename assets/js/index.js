import Humano from './classes/Humano.js';
import Saiyajin from './classes/Saiyajin.js'

let modulo = ( () => {
    let url = './dbz.json';
    let buscar = async (nombre) => {
        let resultado = await fetch(url);
        resultado = await resultado.json();

        let busqueda = resultado.personajes.find(item => item.name == nombre);
        return busqueda;
    }

    return {
        buscarImagen: buscar, //Función Privada
        agregarParticipante: (participante, arreglo) => { //Función Pública
            arreglo.push(participante);
            return arreglo;
        },
        mostrarParticipantes: (arreglo) => {
            document.getElementById('Participantes').innerHTML = '';
            arreglo.forEach(element => {
                document.getElementById('Participantes').innerHTML += `
                    <div class="card col-4">
                        <img src="/assets/imgs/${element.Nombre}/${element.Img}" class="card-img-top" alt="Imagen ${element.Nombre}">
                        <div class="card-body">
                        <h5 class="card-title">${element.Nombre}</h5>
                        <p class="card-text">
                            <div><b>Raza:</b>${element.Raza}</div>
                            <div><b>Poder de Pelea:</b>${element.Poder}</div>
                        </p>
                        <button type="button" class="btn btn-outline-warning">Habilidad Especial</button>
                        </div>
                    </div>
                `
            });
        }
    }
})();

let arregloParticipantes = [];


document.getElementById("buttonImages").addEventListener("click",async function(){
    let nombre = document.getElementById('nombre').value;

    let divModal = document.querySelector('.modal .personajes');
    if(nombre == ''){
        divModal.innerHTML = 'No se encontraron imágenes'
    }else{
        let busqueda = await modulo.buscarImagen(nombre);
        //console.log(nombre);
        divModal.innerHTML = '';
        busqueda.imagenes.map(item => {
            divModal.innerHTML += `<img id="${nombre}-${item}" src='/assets/imgs/${nombre}/${item}' height='150px'>&nbsp;&nbsp;`
        })
        busqueda.imagenes.map(item => {
            document.getElementById(`${nombre}-${item}`).addEventListener("click",function(){
                document.getElementById("preview").innerHTML = `<img src='/assets/imgs/${nombre}/${item}' height='190px'>`;
                document.getElementById("txt-preview").value = item;
            })
        })
    }
})

document.getElementById("btnRegistrar").addEventListener("click",function(){
    let nombre = document.getElementById('nombre').value;
    let raza = document.getElementById('raza').value;
    let img = document.getElementById('txt-preview').value;
    let poder = document.getElementById('poderPelea').value;

    if(nombre == '' || raza == '' || img == '' || poder == ''){
        alert("Por favor ingresar todos los datos");
        return false;
    }

    let participante;
    switch (raza) {
        case 'Saiyajin':
            participante = new Saiyajin(nombre, img, poder, raza);
        break;

        case 'Humano':
            participante = new Humano(nombre, img, poder, raza);
        break;
    }

    modulo.agregarParticipante(participante, arregloParticipantes);
    modulo.mostrarParticipantes(arregloParticipantes);

    //console.log(arregloParticipantes);

})

