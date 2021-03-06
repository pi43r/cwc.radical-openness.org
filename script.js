const title = document.getElementById("title");
const doing = ["Camping", "Conversations", "Cooking"];
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
  document.getElementById('Conversations-nav').querySelector('table').classList.remove('t-focus')
  document.getElementById('Camping-nav').querySelector('table').classList.remove('t-focus')
  document.getElementById('Working-nav').querySelector('table').classList.   remove('t-focus')
  document.getElementById(hash + '-nav').querySelector('table').classList.add('t-focus')
}

loadmemory();
// do something every second
setInterval(replaceEmoticon, 2000);
window.addEventListener("hashchange", loadmemory);

// a11ty for toggle
let myLabels = document.querySelectorAll(".lbl-toggle");
Array.from(myLabels).forEach((label) => {
  label.addEventListener("keydown", (e) => {
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    }
  });
});
