const btn = document.getElementById("btn");
const wa_num = document.getElementById("wa-number");
const message = document.getElementById("user-message");
const warn = document.getElementById("result");
const delaytime = document.getElementById("delay-time");

// async function fetchMessage() {
//   let notification = await window.pywebview.api.deploySuccess();
//   warn.textContent = notification;
// }

btn.addEventListener("click", () => {
  if (wa_num.value === "") {
    warn.innerText = "Please enter a WhatsApp number";
  } else if (wa_num.value.length < 10) {
    warn.innerText = "Please enter a valid WhatsApp number";
  } else if (message.value === "") {
    warn.textContent = "Please enter a message";
  } else if (delaytime.value === "") {
    warn.textContent = "Please enter a delay time make it at least 2 minutes.";
  } else {
    const targetNumber = wa_num.value;
    const userMessage = message.value;
    const timeToSend = delaytime.value;
    window.pywebview.api.send_message(targetNumber, userMessage, timeToSend);
  }
});

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const timeString = `${hours}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")} ${ampm}`;
  document.getElementById("current-time").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();
