import express from 'express';

const indexRouter = express.Router();

indexRouter.route('/')
	.get((_request, response, _next) => {
		response.status(200).json(
			{
				body: 'Root',
			},
		);
	});

export default indexRouter;
