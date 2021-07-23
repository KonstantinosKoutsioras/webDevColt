const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const languageSnippet = process.argv[2];
const francAll = franc.all(languageSnippet);
const francInfo = francAll[0];
const isoCode = francInfo[0];
const accuracyPerc = francInfo[1];
const langInfo = langs.where("3", isoCode);

if (isoCode === 'und') {
    console.log("That language is yet to be discovered!".rainbow);
} else {
    const fullName = langInfo.name;
    console.log(`\nWe have determined the language to be: ${fullName.blue}\n\nWith an accuracy of: ${(accuracyPerc * 100).toString().green}%`);
}
// const r = franc('Alle menslike wesens word vry');
// console.log(r);