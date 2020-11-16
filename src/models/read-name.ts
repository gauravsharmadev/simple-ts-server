import {readFileSync, readFile} from 'fs';
import {resolve} from 'path';
import {ReadNameUtility, WriteNamesUtility, ReadFilePromise} from '../utility';
import {Payload} from '.';
/**
 * The service will accept the list ogf names
 * @param name
 */
const ServiceModelFunction = async (payload: Payload): Promise<Payload> => {
	const {name} = payload;
	// read the file
	const content = await ReadFilePromise(resolve(__dirname, '..', 'assets', 'output.txt'));
	const data = content.replace(/\n/ig, '\r').split('\r').find(x => x.match(new RegExp(name, 'g')));
	if (data) {
		const [n, count] = data.split(':');
		return {name: n, count: Number(count)}
	}
	return {name, count: 0};
};

export const ReadName = ServiceModelFunction;