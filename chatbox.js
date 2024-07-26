function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var chatBox = document.getElementById('chat-box');

    var message = messageInput.value.trim();
    if (message !== '') {
        var newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = message;

        chatBox.appendChild(newMessage);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
    }
}
