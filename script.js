
async function callBot(question) {
  const response = await fetch("/api/ask", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ question })
  });

  const data = await response.json();
  return data.answer;
}

document.getElementById("sendBtn").onclick = async () => {
  const input = document.getElementById("msgInput");
  const msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  input.value = "";

  const botReply = await callBot(msg);
  addMessage(botReply, "bot");
};

function addMessage(text, type) {
  const chatbox = document.getElementById("chatbox");
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}
