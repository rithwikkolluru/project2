//adding new features added button to it.
//adding new features -form

// A simple dictionary for predefined responses
const responses = {
    "hi": "Hello! How can I help you?",
    "hello": "Hi there!",
    "how are you": "I'm doing great, thanks for asking! And you?",
    "bye": "Goodbye! Have a great day!",
    "what is your name": "I am a simple JavaScript chatbot.",
    "default": "I'm not sure I understand. Can you rephrase?"
};

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim().toLowerCase();
    
    if (userMessage === "") return;

    displayMessage(userMessage, "user-message");
    userInput.value = "";
    setTimeout(() => {
        const botResponse = generateResponse(userMessage);
        displayMessage(botResponse, "bot-message");
    }, 500);
}

function generateResponse(message) {
    if (responses[message]) {
        return responses[message];
    } else {
        return responses["default"];
    }
}

function displayMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});


