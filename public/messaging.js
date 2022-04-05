const socket = io('http:://loclahost:3005')//where socket is hosted

socket.on('chat-message', data => {
    console.log(data)
})