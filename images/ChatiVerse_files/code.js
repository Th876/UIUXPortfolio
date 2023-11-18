document.addEventListener("DOMContentLoaded", function () {
    const app = document.querySelector(".app");
    const socket = io();

    let uname;
    let exitClicked = false;

    app.querySelector(".join-screen #join-user").addEventListener("click", function () {
        let username = app.querySelector(".join-screen #username").value;

        if (username.length === 0) {
            return;
        }
        socket.emit("newuser", username);
        uname = username;

        // Hide hero text when the user joins the chatroom
        document.querySelector(".hero-text").style.display = "none";
        document.querySelector(".clay-girl").style.display = "none";

        // Make the chat height longer
        app.querySelector(".chat-screen .messages").style.height = "calc(100% - 150px)";

        app.querySelector(".join-screen").classList.remove("active");
        app.querySelector(".chat-screen").classList.add("active");
    });

    // Handle pressing Enter to send a message
    app.querySelector(".chat-screen #message-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents adding a new line in the textarea
            sendMessage();
        }
    });

    // Handle clicking the "Send" button
    app.querySelector(".chat-screen #send-message").addEventListener("click", sendMessage);

    app.querySelector(".chat-screen #exit-chat").addEventListener("click", function () {
        exitClicked = true;
        exitChat();
    });

    // Detect when the user is leaving the page or closing the tab
    window.addEventListener('beforeunload', function () {
        if (!exitClicked) {
            exitChat();
        }
    });

    socket.on("update", function (update) {
        renderMessage("update", update);
    });

    socket.on("chat", function (message) {
        renderMessage("other", message);
    });

    socket.on("image", function (data) {
        renderMessage("other", data);
    });

    function sendMessage() {
        let message = app.querySelector(".chat-screen #message-input").value;
        if (message.length === 0) {
            return;
        }
        renderMessage("my", {
            username: uname,
            text: message,
        });
        socket.emit("chat", {
            username: uname,
            text: message
        });
        app.querySelector(".chat-screen #message-input").value = "";
    }

    function exitChat() {
        socket.emit("exituser", uname);
        window.location.reload();
    }

    function renderMessage(type, message) {
        let messageContainer = app.querySelector(".chat-screen .messages");
        let messageWrapper = document.createElement("div");

        if (type === "update") {
            messageWrapper.setAttribute("class", "update");
            messageWrapper.innerText = message;
        } else {
            messageWrapper.setAttribute("class", `message ${type}-message`);
            let el = document.createElement("div");

            if (type === "my") {
                el.innerHTML = `
                    <div class="name">You</div>
                    <div class="text">${makeLinksClickable(message.text)}</div>
                `;
            } else if (type === "other") {
                el.innerHTML = `
                    <div class="name">${message.username}</div>
                    <div class="text">${makeLinksClickable(message.text)}</div>
                `;
            }

            messageWrapper.appendChild(el);
        }

        messageContainer.appendChild(messageWrapper);

        // Scroll chat to end
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }

    function makeLinksClickable(text) {
        // Regular expression to find URLs in the text
        let urlRegex = /(?:https?:\/\/|www\.)[^\s]+/g;
        return text.replace(urlRegex, function (url) {
            // Check if the URL starts with "www." and add "http://" if not present
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "http://" + url;
            }
            return `<a href="${url}" target="_blank">${url}</a>`;
        });
    }
});
