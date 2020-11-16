import {Request, Response} from 'express';
/**
 * A simple resolver function to handle and bind the model model promises
 * into the controller middleware without repeating the same code.
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} modelPromise represents a function with promise return
 * @author gaurav sharma
 */
export const PromiseMiddlewareResolver = (
	req: Request,
	res: Response,
	modelPromise: Function) => {
	const {body = {}, params: { name }} = req;
	if (name) {
		body.name = name;
	}
	modelPromise(body).then(
		(success: any) => {
			res.status(200).send(success)
		},
		(error: any) => {
			console.log(error);
			res.status(500).send({code: 500, message: error.message})
		},
	);
}