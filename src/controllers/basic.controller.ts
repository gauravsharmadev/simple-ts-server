import {PromiseMiddlewareResolver} from '../utility';
import {WriteNames, ReadName} from '../models';
import {Request, Response} from 'express';
/**
 * the application basic controllers
 */
export const BasicControllers = {
	/**
	 * @param req 
	 * @param res 
	 */
	basic: (req: Request, res: Response) => PromiseMiddlewareResolver(req, res, WriteNames),
	read: (req: Request, res: Response) => PromiseMiddlewareResolver(req, res, ReadName),
}