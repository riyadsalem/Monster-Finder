showMonsters();
function showMonsters() {
  const monster = document.createElement("div");
  monster.className = "monster";

  const img = document.createElement("img");
  img.src = "https://robohash.org/6?set=set2";
  img.alt = "Riyad Salem";

  const name = document.createElement("p");
  name.className = "name";
  name.innerText = "Riyad Salem";

  const email = document.createElement("p");
  email.className = "email";
  email.innerText = "riyad.m.salem.19988@gmail.com";

  monster.append(img, name, email);

  document.querySelector(".monsters").append(monster);

  console.log(monster);
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

  console.log(notFoundDiv);
}
