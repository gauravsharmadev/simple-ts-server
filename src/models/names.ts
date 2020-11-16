import {readFileSync, readFile} from 'fs';
import {resolve} from 'path';
import {ReadNameUtility, WriteNamesUtility, ReadFilePromise} from '../utility';
/**
 * default payload interface for this model
 */
export interface Payload {
	name: string,
	count: number,
};
/**
 * The service will accept the list ogf names
 * @param name
 */
const ServiceModelFunction = async (payload: Payload): Promise<string> => {
	const {name} = payload;
	// read the file
	const content = await ReadFilePromise(resolve(__dirname, '..', 'assets', 'first-names.txt'));
	const text = await ReadFilePromise(resolve(__dirname, '..', 'assets', 'oliver-twist.txt'));
	const names = content.replace(/\n/ig, '\r').split('\r');

	await WriteNamesUtility(names, text);

	return 'success';
};

export const WriteNames = ServiceModelFunction;