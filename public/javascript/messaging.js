const socket = io()//where socket is hosted
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const messageContainer = document.getElementById('message-container')
const joinRoom = document.getElementById('room-button')

const name = prompt('What is your name?')
appendMessage('You are chatting now')
socket.emit('new-user', name)

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
    appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const room = roomInput.value
    const message = messageInput.value
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

joinRoom.addEventListener('click', () => {
    const room = roomInput.value
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.textContent = message
    messageContainer.append(messageElement)
}