// room.js

// websocket connection
const socket = new WebSocket('ws://localhost:8000/ws/chat/' + {{ room }} + '/');

// message form submission
document.querySelector('#message-form').addEventListener('submit', e => {
    e.preventDefault();
    const message = document.querySelector('#message').value;
    socket.send(JSON.stringify({
        'message': message,
        'username': {{ username }},
        'room': {{ room }}
    }));
    document.querySelector('#message').value = '';
});

// websocket message received
socket.onmessage = e => {
    const data = JSON.parse(e.data);
    const message = document.createElement('div');
    message.innerHTML = `<strong>${data.username}:</strong> ${data.message}`;
    if (data.username == {{ username }}) {
        message.classList.add('me');
    }
    document.querySelector('#messages').appendChild(message);
};
