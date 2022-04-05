class Player {
    constructor() {
    this.coal = 0;
    this.solar = 0;
    this.miners = 0;
    this.iron = 0;
    this.tempres = 20;
    this.maxfuel = 200;
    this.laststation;
  }
}

class Planet {
  constructor(name, desc, yeild, powerreq, sunlight) {
    this.name = name;
    this.desc = desc;
    this.yeild = yeild;
    this.sunlight = sunlight;
  }
  update() {
    this.power = Player.solar * this.sunlight;
  }
  goto() {
    document.getElementById(planetname).value = this.name;
    document.getElementById(planetdesc).value = this.desc;
  }
}

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
}

function boot() {
  log("Booting...")
}
boot()