const socketController = (socket) => {
	socket.on('setNickname', ({ nickname }) => {
		console.log('nickname:', nickname);
		socket.nickname = nickname;
	});
};

export default socketController;
