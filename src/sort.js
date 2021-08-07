const list = require('./2.json');
let index = 0;
const data = {};

for (const cat in list) {
	// Category
	// list[cat].forEach((e) => {
	// 	const f = e;
	// 	g = {}
	// 	g.index = index;
	// 	g.code = f.code;
	// 	g.emoji = f.emoji;
	// 	g.category = cat;
	// 	g.flagged = f.flagged
	// 	g.keywords = f.keywords
	// 	index++;
	// 	e = g;
	// })
	const emojis = [];
	for (const e of list[cat]) {
		g = {}
		g.index = index;
		g.code = e.code;
		g.emoji = e.emoji;
		g.category = cat;
		g.flagged = e.flagged
		g.keywords = e.keywords
		index++;
		emojis.push(g)
	}
	data[cat] = emojis

}




const { writeFile } = require('fs/promises')

writeFile('./list.json', JSON.stringify(data)).then(() => console.log('OK'))