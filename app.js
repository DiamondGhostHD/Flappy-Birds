// TODO Definiti urmatoarele constante cu valori potrivite (prin incercari) in loc de 0

let move_speed = 3.2;
let gravity = 0.32;
let pipe_gap = 18.3;
let pipe_seperation = 0;
let bird_dy = 0;

//! Jocul nostru va putea avea 3 stari: Start, Play si End
let game_state = "Start";

// Stocati in variabile elementele din DOM corespunzatoare tuturor claselor si id-urilor pe care le indentificati in index.html
let bird = document.querySelector("#bird");
let message = document.querySelector(".message");
let score_val = document.querySelector(".score_val");
let score_title = document.querySelector(".score_title");
let background_element = document.querySelector(".background");

// Stocati in variabile marginile obiectului cu clasele bird si background
let bird_props = bird.getBoundingClientRect();
let background = background_element.getBoundingClientRect();

// Colorati elementul de tip canvas cu id="bird" pe interior
var ctx = bird.getContext("2d");
ctx.fillRect(0, 0, bird_props.width, bird_props.height);

// TODO Detecteaza coliziunea dintre pasare si o teava
function collisionBirdPipe(pipe_sprite_props) {
    return ((bird_props.left < (pipe_sprite_props.left + pipe_sprite_props.width))
      && ((bird_props.left + bird_props.width) > pipe_sprite_props.left)
      && (bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height)
      && (bird_props.top + bird_props.height > pipe_sprite_props.top))
  }

// Detecteaza coliziunea dintre pasare si marginile ferestrei
function collisionBirdWindow() {
  return (bird_props.top < background.top || bird_props.bottom > background.bottom);
}

function gameOver() {
  // Seteaza starea jocului astfel incat sa fie terminat
  game_state = "End";

  // Seteaza textul elementului cu clasa "message" cu textul initial din index.html
  message.innerHTML = "Press Enter To Start Game";

  message.style.left = "28vw";
}

function play() {
  function move() {
    // Detecteaza daca jocul s-a terminat
    if(game_state == "End") {
      return ;
    }

    let pipe_sprite = document.querySelectorAll(".pipe_sprite");

    pipe_sprite.forEach((element) => {
      let pipe_sprite_props = element.getBoundingClientRect();
      bird_props = bird.getBoundingClientRect();
      if (pipe_sprite_props.right <= 0) {
        element.remove();
      } else {
        if (collisionBirdPipe(pipe_sprite_props)) {
          gameOver();
          return;
        } else {
          if (
            pipe_sprite_props.right < bird_props.left &&
            pipe_sprite_props.right + move_speed >= bird_props.left &&
            element.increase_score == "1"
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;
          }
          element.style.left = pipe_sprite_props.left - move_speed + "px";
        }
      }
    });
    requestAnimationFrame(move);
  }
  requestAnimationFrame(move);

  function apply_gravity() {
    if (game_state != "Play") return;

    bird_dy = bird_dy + gravity;

    document.addEventListener("keydown", (event) => {
      // verifica daca tasta apasata sageata sus sau space si inlocuiti true cu expresia creata de voi   
      if (event.key === " " || event.key === "ArrowUp") {
        bird_dy = -7.6;
      }
    });

    if (collisionBirdWindow()) {
      gameOver();
      return;
    }

    bird.style.top = bird_props.top + bird_dy + "px";
    bird_props = bird.getBoundingClientRect();
    requestAnimationFrame(apply_gravity);
  }
  requestAnimationFrame(apply_gravity);

  function create_pipe() {
    if (game_state != "Play") return;

    //! daca s-a trecut de valoarea prag de 130 trebuie sa afisam o noua teava
    if (pipe_seperation > 130) {
      // Reseteaza distanta dintre tevi pe 0
      pipe_seperation = 0;
      let pipe_posi = Math.floor(Math.random() * 43) + 8;

      // Creeaza un element nou de tip "div" cu clasa "pipe_sprite"
      let pipe_sprite_inv = document.createElement("div");
      pipe_sprite_inv.className = "pipe_sprite";
      pipe_sprite_inv.style.top = pipe_posi - 70 + "vh";
      pipe_sprite_inv.style.left = "100vw";
      // Adauga elementul in DOM drept copil al elementului body
      document.body.appendChild(pipe_sprite_inv);

      let pipe_sprite = document.createElement("div");
      pipe_sprite.className = "pipe_sprite";
      pipe_sprite.style.top = pipe_posi + pipe_gap + "vh";
      pipe_sprite.style.left = "100vw";
      pipe_sprite.increase_score = "1";
      document.body.appendChild(pipe_sprite);
    }
    pipe_seperation++;
    requestAnimationFrame(create_pipe);
  }
  requestAnimationFrame(create_pipe);
}

function initGame() {
  bird.style.top = "40vh";

  // seteaza starea jocul pe Play
  game_state = "Play";

  // Fa sa nu se mai vada mesajul cu initial si resetati scourl pe 0  
  message.innerHTML = "";
  score_val.innerHTML = "0";
  score_title.innerHTML = "Score : ";
}

// verifica daca s-a apasat o tasta
document.addEventListener("keypress", (event) => {
  // verifica daca tasta apasata a fost enter si jocul nu e in starea Play
  if (event.key === "Enter" && game_state != "Play") {
    document.querySelectorAll(".pipe_sprite").forEach((e) => {
      e.remove();
    });

    initGame();
    play();
  }
});
