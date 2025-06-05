const messages = [
  "Mamá te debía un regalo... ese te lo di pasando las materias 😅",
  "Asi que decidi darte otro haciendote esta tarjeta 💌",
  "Gracias, tu eres una mamá increible, te amo mucho ❤️‍🔥",
  "Tambien yo estoy feliz si tu estas feliz porque haya pasado materias",
  "Le pido a Dios que tu y el papá vivan muchos más y tambien la Kloe",
];

const messageContainer = document.getElementById("messageContainer");
const heartBtn = document.getElementById("heartBtn");
let messageIndex = 0;

heartBtn.addEventListener("click", () => {
  if (messageIndex < messages.length) {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.textContent = messages[messageIndex++];
    messageContainer.appendChild(msg);
  }
});

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}
setInterval(createFloatingHeart, 300);
