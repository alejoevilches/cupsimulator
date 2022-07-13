//Declaro variables
const cantidadDeEquipos=4
let equipos=[];

//Bucle para ingresar equipos al sistema
for(i=0;i<cantidadDeEquipos;i++){
    equipos[i]=[prompt("Nombre del equipo "+(i+1))]
}

//Solicito al usuario que me indique cuantos puntos tiene cada equipo
let puntos0=parseInt(prompt(`¿Cuantos puntos tiene ${equipos[0]}?`));
let puntos1=parseInt(prompt(`¿Cuantos puntos tiene ${equipos[1]}?`));
let puntos2=parseInt(prompt(`¿Cuantos puntos tiene ${equipos[2]}?`));
let puntos3=parseInt(prompt(`¿Cuantos puntos tiene ${equipos[3]}?`));

//Funcion para poder calcular que equipo tiene mas puntos
function puntaje(){
    if(puntos0>puntos1 && puntos0>puntos2 && puntos0>puntos3){ 
        alert(`${equipos[0]} es el puntero del grupo`);}
        else if(puntos1>puntos0 && puntos1>puntos2 && puntos1>puntos3){
            alert(`${equipos[1]} es el puntero del grupo`);}
        else if(puntos2>puntos0 && puntos2>puntos1 && puntos2>puntos3){
            alert(`${equipos[2]} es el puntero del grupo`);}
        else if(puntos3>puntos0 && puntos3>puntos1 && puntos3>puntos2){
            alert(`${equipos[3]} es el puntero del grupo`);} 
        else{
            alert("El grupo todavía no tiene un puntero");
        } 
        }

//Corro funcion
puntaje();
