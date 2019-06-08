const socket = io('/');

socket.on('hello', () => console.log('Somebody joined.'));

function sendMessage(message) {
	socket.emit('newMessage', { message });
}
