const btns = document.querySelectorAll("button");

document.addEventListener("keypress", (e) => {
  makeSound(e.key);
  playAnimation(e.key);
});

btns.forEach((btn) => {
  //adding animation on press
  btn.addEventListener("click", (e) => {
    const btnName = e.target.innerHTML;
    makeSound(btnName);
    playAnimation(btnName);
  });

   const name=btn.innerHTML;

   switch (name) {
    case "w":
      btn.style.backgroundImage = "url('images/tom1.png')";
      break;
    case "a":
      btn.style.backgroundImage = "url('images/tom2.png')";
      break;
    case "s":
      btn.style.backgroundImage = "url('images/tom3.png')";
      break;
    case "d":
      btn.style.backgroundImage = "url('images/tom4.png')";
      break;
    case "j":
      btn.style.backgroundImage = "url('images/crash.png')";
      break;
    case "k":
      btn.style.backgroundImage = "url('images/kick.png')";
      break;
    case "l":
      btn.style.backgroundImage = "url('images/snare.png')";
      break;
    default:
      break;
  }
  
});

function playAnimation(name) {
    const btn=document.querySelector("."+name);  
    
    btn.classList.add("pressed");
    setTimeout(() => {
      btn.classList.remove("pressed");
    }, 100);
}

function makeSound(btn) {
  switch (btn) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
        document.querySelector("body").classList.add("game-over");
        setTimeout(()=>{
            document.querySelector("body").classList.remove("game-over");
        },100);
      break;
  }
}