import { messageQueue } from '$src/routes/message';
import { Client } from 'tmi.js';

export const ircConnect = () => {
	const client = new Client({ options: { debug: true }, channels: ['shineslove'] });

	try {
		client.connect();
	} catch (err) {
		console.error(err);
	}

	client.on('message', (_, tags, message, self) => {
		if (self) return;
		if (message.startsWith('!')) {
			console.log(`Hello from the side: ${tags['display-name']}`);
            const data = { username: tags.username || '', message }
			messageQueue.update(x => [...x, data]);
		}
	});
};
