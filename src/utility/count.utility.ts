import {Payload} from '../models';
import {writeFile} from 'fs';
import {resolve} from 'path';

// interface CountWordResponse {
// 	count: number,
// 	skippable: Array<string>,
// 	filter: string,
// };

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

// const countWord = (
// 	text: string,
// 	word: string,
// 	skippable: Array<string>,
// 	names: Array<string>,
// ): CountWordResponse => {
// 	const tempText = text.replace(new RegExp(word, 'g'), ` ${word} `);
// 	let count = 0;
// 	const filter = tempText.split(' ').filter(x => !skippable.includes(x) && names.includes(x));
// 	console.log(`iterable: ${filter.length}`);
// 	for (const w of filter) {
// 		if (w === word) {
// 			count += 1;
// 			skippable.push(w);
// 		}
// 	}
// 	return {count, skippable, filter: filter.join(' ')};
// }
export const WriteNamesUtility = async (
	names: Array<string>,
	content: string
): Promise<Array<Payload>> => {
	const namesObject: any = {};
	names.map(key => namesObject[key] = 0);
	// console.log(namesObject);
	/**
	 * logic to count names
	 */
	const start = new Date();
	console.log(`started at ${start.getTime()}`);
	// let s: Array<string> = [];
	// let f = content;
	// for (const word of names) {
	// 	const {count, filter} = countWord(f, word, s, names);
	// 	f = filter;
	// 	console.log(`${word}: ${count}\nskippable: ${s.length}`)
	// 	namesObject[word] = count;
	// }
	let writeString = '';
	const words = content.split(' ').sort();
	// let inset = 0;
	for (const name of names.sort()) {
		const found = words.find(x => x.match(new RegExp(`^${name}(,|:|)$`, 'g')));
		if (found) {
			let count = 0;
			for(const word of words) {
				if (word.match(new RegExp(new RegExp(`^${name}(,|:|)$`, 'g')))) {
					count += 1;
				}
			}
			namesObject[name] = count;
			writeString += `${name}: ${count}\n`;
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