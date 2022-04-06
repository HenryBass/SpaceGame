class Player {
    constructor() {
    this.coal = 0;
    this.solar = 0;
    this.miners = 0;
    this.iron = 0;
    this.tempres = 20;
    this.power = 200;
    this.maxpower = 200;
    this.laststation = Crios;
  }
  goto(loc) {
    setTimeout(function(){
    document.getElementById("planetname").innerHTML = loc.name;
    document.getElementById("planetdesc").innerHTML = loc.desc;
    document.getElementById("planetlight").innerHTML = loc.sunlight;
    document.getElementById("planetpop").innerHTML = loc.pop;
    document.getElementById("planettemp").innerHTML = loc.temp;

    document.documentElement.style.setProperty('--color',  loc.color);
    }, 1000);

    setTimeout(function(){
    log("Booted at: " + loc.name)
    }, 1000);
  }
  kill() {
    this.power = this.maxpower;
    boot()
  }
}


class Planet {
  constructor(name, desc, yeild, sunlight, pop, color, temp) {
    this.name = name;
    this.desc = desc;
    this.yeild = yeild;
    this.sunlight = sunlight;
    this.pop = pop + d(pop/5);
    this.color = color;
    this.temp = temp;
  }
  update() {
    Ship.power += ship.solar * this.sunlight;
  }
}

class Station {
  constructor(name, desc, yeild, sunlight, pop, color, temp) {
    this.name = name;
    this.desc = desc;
    this.sunlight = sunlight;
    this.pop = pop + d(pop/5);
    this.color = color;
    this.temp = temp;
  }
  update() {
    Ship.power += ship.solar * this.sunlight;
  }
  dock() {
    ship.laststation = this;
  }
}

Crios = new Planet(
  "Crios 404-b",
  "A vast grassland planet, now only inhabited by a few mining settlements",
  1,
  0.86,
  1_900,
  "#2ec27e",
  296
);

Argo = new Planet("Argo 404-c",
  "A massive planet of water, with a thick atmosphere",
  1,
  0.23,
  20,
  "#1a5fb4",
  273
);

Helios = new Station("Helios Station",
  "A large trading complex, in high orbit over the sun",
  1,
  4,
  90_000,
  "#f5c211",
  465
);

Ship = new Player();

document.getElementById("command").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    parsemsg(document.getElementById("command").value);
  }
})

function parsemsg(msg) {
document.getElementById("command").value = "";
comms = msg.split(" ");
if (comms[0] == "warp") {
  try {
    eval(comms[1]).name;
    log("Warping...")
    eval("Ship.goto(" + comms[1] + ")")
  } catch {
      log("Destination name not recognised. Format is \"Warp [Name]\"")
  }

} else {
  log("Command not recognised - see manual")
}
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
  Ship.goto(Crios)

  setTimeout(function(){
    log("Type \"manual\" for a list of commands")
  }, 2000);
  
}
boot()