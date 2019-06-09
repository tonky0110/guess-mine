import events from './events';

const socketController = (socket) => {
	socket.on(events.setNickname, ({ nickname }) => {
		console.log('nickname:', nickname);
		socket.nickname = nickname;
	});
};

export default socketController;
