
//se inicializan las variables globales a usar

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result_player = document.getElementById("result_player");
const result_cpu = document.getElementById("result_cpu");

let counter_cpu = 0;
let counter_player = 0;
paragraph_cpu.textContent = counter_cpu;
paragraph_player.textContent = counter_player;

rock.addEventListener("click", () => {
  //Se le asigna la imagen rock a la img del player
  result_player.setAttribute("src", "./image/rock.png");

  //Generar numero aleatorio entre 3 y 1
  let num_random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (num_random === 1) {
    result_cpu.setAttribute("src", "./image/rock.png");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }

  if (num_random === 2) {
    result_cpu.setAttribute("src", "./image/paper.png");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 1;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }

  if (num_random === 3) {
    result_cpu.setAttribute("src", "./image/scissors.png");
    counter_player = counter_player + 1;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }

  // Se comprueba si gana el player o la cpu
  if (counter_cpu === 3) {
    alert("Perdiste ");

    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  if (counter_player === 3) {
    alert("Ganaste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }

  //Se ejecuta una funcion la cual es asignarles la imagen question al img , la cual ejecuta a un determinado tiempo
  window.setTimeout(() => {
    result_cpu.setAttribute("src", "./image/question.png");
    result_player.setAttribute("src", "./image/question.png");
  }, 1500);
});

paper.addEventListener("click", () => {
  //Se le asigna la imagen paper a la img del player
  result_player.setAttribute("src", "./image/paper.png");

  //Generar numero aleatorio entre 3 y 1
  let num_random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  //Se comprueba el resultado del numero aleatorio y deacuerdo a eso, se evalua
  if (num_random === 1) {
    result_cpu.setAttribute("src", "./image/rock.png");
    counter_player = counter_player + 1;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }
  if (num_random === 2) {
    result_cpu.setAttribute("src", "./image/paper.png");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }
  if (num_random === 3) {
    result_cpu.setAttribute("src", "./image/scissors.png");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 1;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }

  // Se comprueba si gana el player o la cpu
  if (counter_cpu === 3) {
    alert("Perdiste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  if (counter_player === 3) {
    alert("Ganaste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  //Se ejecuta una funcion la cual es asignarles la imagen question al img , la cual ejecuta a un determinado tiempo
  window.setTimeout(() => {
    result_cpu.setAttribute("src", "./image/question.png");
    result_player.setAttribute("src", "./image/question.png");
  }, 1500);
});

scissors.addEventListener("click", () => {
  //Se le asigna la imagen scissors a la img del player
  result_player.setAttribute("src", "./image/scissors.png");

  //Generar numero aleatorio entre 3 y 1
  let num_random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  //Se comprueba el resultado del numero aleatorio y deacuerdo a eso, se evalua
  if (num_random === 1) {
    result_cpu.setAttribute("src", "./image/rock.png");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 1;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }
  if (num_random === 2) {
    result_cpu.setAttribute("src", "./image/paper.png");
    counter_player = counter_player + 1;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }
  if (num_random === 3) {
    result_cpu.setAttribute("src", "./image/scissors.png");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }

  // Se comprueba si gana el player o la cpu
  if (counter_cpu === 3) {
    alert("Perdiste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  if (counter_player === 3) {
    alert("Ganaste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }

  //Se ejecuta una funcion la cual es asignarles la imagen question al img , la cual ejecuta a un determinado tiempo
  window.setTimeout(() => {
    result_cpu.setAttribute("src", "./image/question.png");
    result_player.setAttribute("src", "./image/question.png");
  }, 1500);
});
