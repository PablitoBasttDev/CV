//Menú desplegable
let visible = false;
let menu = document.getElementById('nav');

document.getElementById('nav-bar').addEventListener('click',function(){
    
    if(visible == false){
        menu.style.display = 'block';
        visible = true;
    } else{
        menu.style.display = 'none';
        visible = false;
    }
})

//Ocultar el menú al seleccionar una opción

function selecciona(){
    menu.style.display = 'none';
    visible = false;
}

//Crea barras de habilidades, identificada por su id
function crearBarra(id_barra){
    for(let i=0; i<=18;i++){
        let div = document.createElement('div');
        div.className = 'e';
        id_barra.appendChild(div);
    }
}
//selecciono las barras para luego manipularlas

let html = document.getElementById('html');
crearBarra(html);
let javascript = document.getElementById('javascript');
crearBarra(javascript);
let excel = document.getElementById('excel');
crearBarra(excel);
let canva = document.getElementById('canva');
crearBarra(canva);
let sql = document.getElementById('sql');
crearBarra(sql);
let git = document.getElementById('git');
crearBarra(git);

// Cantidad de barritas que se van a pintar por cada habilidad
//bandera para saber cuando ejecutar la animación
let contadores =  [-1,-1,-1,-1,-1,-1];
let entro = false;

//función que aplica las animaciones
function efectoHabilidades(){
    var habilidades = document.getElementById('habilidades');
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 14, 0, intervalHtml)
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 12, 1, intervalJavascript)
        },100);
        const intervalExcel = setInterval(function(){
            pintarBarra(excel, 18, 2, intervalExcel)
        },100);
        const intervalCanva = setInterval(function(){
            pintarBarra(canva, 10, 3, intervalCanva)
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 8, 4, intervalSql)
        },100);
        const intervalGit = setInterval(function(){
            pintarBarra(git, 12, 5, intervalGit)
        },100);
    }
}

//lleno una barra particular on la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName('e');
        elementos[x].style.backgroundColor = '#EB6440';
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación

window.onscroll = function(){
    efectoHabilidades();
}

//Mostrar el botón solo cuando la página está bajando

const showOnPx = 200;
const backToTopButton = document.getElementById('volver-inicio');

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
    if(scrollContainer().scrollTop>showOnPx){
        backToTopButton.classList.remove('hidden');
    }else{
        backToTopButton.classList.add('hidden');
    }
})

//Desplazarse hacia arriba cada vez que se aprieta el botón

const goToTop = () => {
    document.body.scrollIntoView({behavior:"smooth",});
}

document.getElementById('volver-inicio').addEventListener('click', goToTop);
