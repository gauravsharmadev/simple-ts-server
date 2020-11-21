import {Payload} from '../models';
import {writeFile} from 'fs';
import {resolve} from 'path';

/**
 * find the name from the dataset
 * @param {String} name the name to find from the file
 */
export const ReadNameUtility = async (
	name: string
): Promise<Payload> => {
	return {
		name: 'John',
		count: 10
	}
}

export const WriteNamesUtility = async (
	names: Array<string>,
	content: string
): Promise<Array<Payload>> => {
	const namesObject: any = {};
	names.map(key => namesObject[key] = 0);
	/**
	 * logic to count names
	 */
	const start = new Date();
	console.log(`started at ${start.getTime()}`);
	let writeString = '';
	const words = content.split(' ').sort();
	for (const name of names.sort()) {
		const found = words.filter(x => x.match(new RegExp(`\\b(${name})\\b`, 'g')));
		if (found && found.length) {
			namesObject[name] = found.length;
			writeString += `${name}: ${found.length}\n`;
			console.log(writeString);
		}
	}
	writeFile(
		resolve(__dirname, '..', 'assets', 'output.txt'),
		writeString,
		{encoding: 'utf-8'},
		() => {
			console.log('file write success')
		}
	);
	console.log(`finised at ${new Date().getTime()}`);
	return [{name: 'John', count: 10}];
}