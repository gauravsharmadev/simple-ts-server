import express from 'express';
import {ApplicationRoutes} from './routes';
const app: express.Application = express();

ApplicationRoutes(app);

app.listen(3000, () => {
	console.log('App is running on port 3000.');
});