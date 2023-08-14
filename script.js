document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send-btn");

    sendButton.addEventListener("click", function () {
        const message = messageInput.value.trim();
        if (message !== "") {
            const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            const newMessage = `<div class="message"><span class="time">${time}</span>: ${message}</div>`;
            chatBox.innerHTML += newMessage;
            messageInput.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });
});
