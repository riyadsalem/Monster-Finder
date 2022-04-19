import { monsters } from "./monsters.js";
//console.log(monsters);

for (let monsterdiv of monsters) {
  showMonsters(monsterdiv);
}

// showMonsters();
function showMonsters(monsterdiv) {
  const monster = document.createElement("div");
  monster.className = "monster";

  const img = document.createElement("img");
  img.src = `https://robohash.org/${monsterdiv.id}?set=set2`;
  img.alt = monsterdiv.name;

  const name = document.createElement("p");
  name.className = "name";
  name.innerText = monsterdiv.name;

  const email = document.createElement("p");
  email.className = "email";
  email.innerText = monsterdiv.email;

  monster.append(img, name, email);

  document.querySelector(".monsters").append(monster);

  // console.log(monster);
}

notFoudn();
function notFoudn() {
  const notFoundDiv = document.createElement("div");
  notFoundDiv.className = "p-5 not-found";
  notFoundDiv.style.display = "none";

  const span = document.createElement("span");
  span.textContent = "404";

  const h1 = document.createElement("h1");
  h1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️";

  notFoundDiv.append(span, h1);

  // document.querySelector(".monsters").append(notFoundDiv);
  //console.log(notFoundDiv);
}
