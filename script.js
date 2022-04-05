class Player {
    constructor() {
    this.coal = 0;
    this.solar = 0;
    this.miners = 0;
    this.iron = 0;
    this.tempres = 20;
    this.power = 200;
    this.maxpower = 200;
    this.laststation;
  }
  goto(loc) {
    document.getElementById("planetname").innerHTML = loc.name;
    document.getElementById("planetdesc").innerHTML = loc.desc;
    document.getElementById("planetlight").innerHTML = loc.sunlight;
    document.getElementById("planetpop").innerHTML = loc.pop;
  }
  kill() {
    this.power = this.maxpower;
    boot()
  }
}


class Planet {
  constructor(name, desc, yeild, sunlight, pop, color) {
    this.name = name;
    this.desc = desc;
    this.yeild = yeild;
    this.sunlight = sunlight;
    this.pop = pop + d(pop/5);
    this.color = color
  }
  update() {
  }
}

Earth = new Planet("Earth", "A lush, water covered world", 1, 0.86, 1_900);

Ship = new Player();

Ship.laststation = Earth;

document.getElementById("command").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    parsemsg(document.getElementById("command").value);
  }
})

function parsemsg(msg) {
document.getElementById("command").value = "";
comms = msg.toLowerCase().split(" ");
  log(msg)
}

function log(msg) {
  document.getElementById("console").insertAdjacentHTML(
  'beforeend', `<p>${msg}</p>`
  )
  document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
}

function d(n) {
  return (Math.round(Math.random() * n)) + 1
}

function boot() {
  log("Booting...")
  Ship.goto(Earth)
  
  setTimeout(function(){
    log("Booted at: " + Ship.laststation.name)
  }, 1000);
  
}
boot()