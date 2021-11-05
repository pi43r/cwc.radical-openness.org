const title = document.getElementById("title");
const doing = ["Conversations"];
const withComputers = "with Computers";
const emotes = "*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzz";

function replaceEmoticon() {
  title.innerHTML = "";
  const random = Math.floor(Math.random() * doing.length);
  let text = doing[random];
  text = randomEmote(text);
  let endtext = randomEmote(withComputers);
  title.innerHTML += text + "<br/>" + endtext;
}

function randomEmote(text) {
  let randomized = "";
  for (t of text) {
    if (Math.random() > 0.95) {
      randomized +=
        '<span class="emoticon">' +
        emotes[Math.floor(Math.random() * emotes.length)] +
        "</span>";
    } else {
      randomized += t;
    }
  }
  return randomized;
}

function loadmemory() {
  let hash = location.hash.substring(1);
  console.log(hash);
  if (hash == "") return;
  const memory = document.querySelector(".memory");
  for (c of memory.children) {
    if (c.id == hash) {
      c.style.display = "flex";
      c.scrollIntoView();
    } else {
      c.style.display = "none";
    }
  }
}

loadmemory();
// do something every second
setInterval(replaceEmoticon, 2000);
window.addEventListener("hashchange", loadmemory);
