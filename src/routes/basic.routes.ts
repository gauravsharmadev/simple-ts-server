import { Application } from "express";
import {BasicControllers} from '../controllers';

const endpoint = '/api/name-count';

export const BasicRoutes = (app: Application) => {
	app.get(endpoint, BasicControllers.basic);
	app.get(`${endpoint}/:name`, BasicControllers.read);
}