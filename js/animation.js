const imagen1 = document.querySelector('.jeje1');
const imagen2 = document.querySelector('.jeje2');
const imagen3 = document.querySelector('.jeje3');
// const imagen1 = document.querySelector('.container-datos-dos')

const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);