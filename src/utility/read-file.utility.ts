import {readFile} from 'fs';

export const ReadFilePromise = async (path: string): Promise<string> => new Promise((resolve, reject) => {
	readFile(path, {encoding: 'utf-8'}, (err, file) => {
		if (err) {
			throw new Error('Cannot read file');
		}
		return resolve(file);
	});
});