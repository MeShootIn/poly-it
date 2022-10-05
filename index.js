import process from 'node:process';
import dotenv from 'dotenv';
import express from 'express';
import employeesRouter from './routes/employees.js';

dotenv.config();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '8080';
const app = express();

app.disable('x-powered-by');

app.use(express.json());
app.use('/employees', employeesRouter);
app.use((_request, response, _next) => {
	response.status(404).json({
		error: '404 Not Found',
	});
});

app.listen(PORT, HOST, () => {
	console.log(`Server listens for "http://${HOST}:${PORT}" connection...`);
});
