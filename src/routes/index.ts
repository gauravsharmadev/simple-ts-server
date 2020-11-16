import { Application } from "express";
import {BasicRoutes} from './basic.routes';
/**
 * This function will act as activator for all routes used on the
 * platform
 */
export const ApplicationRoutes = (app: Application) => {
	BasicRoutes(app);
};
