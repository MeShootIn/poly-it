import express from 'express';

const app = express();

const HOST = 'localhost';
const PORT = 7000;

app.get('/', (request, response) => {
	response.status(200).type('text/plain');
	response.send('Root page');
});

app.use((request, response, _next) => {
	response.status(404).type('text/plain');
	response.send('Not found');
});

app.listen(PORT, HOST, () => {
	console.log(`Server listens for http://${HOST}:${PORT} connection...`);
});
