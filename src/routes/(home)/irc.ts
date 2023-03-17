import { messageQueue } from '$src/routes/(home)/message';
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
		const displayName = tags['display-name'];
		const username = tags.username || '';
		if (message.startsWith('!')) {
			console.log(`Hello from the side: ${displayName}`);
            const data = { username , message }
			messageQueue.update(x => [...x, data]);
		}
	});
};
