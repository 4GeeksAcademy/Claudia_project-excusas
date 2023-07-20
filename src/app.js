/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

const misExcusas = () => {
  let quien = ["Mi perro", "Mi abuela", "Mi tortuga", "Mi pájaro"];
  let accion = ["comió", "perdió", "rompió", "aplastó"];
  let que = ["mi tarea", "las llaves", "el auto"];
  let cuando = [
    "antes de clase",
    "cuando terminé",
    "durante el almuerzo",
    "cuando me bañaba"
  ];

  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  document.write(
    quien[quienIndex] +
      " " +
      accion[accionIndex] +
      " " +
      que[queIndex] +
      " " +
      cuando[cuandoIndex]
  );
};

misExcusas();
