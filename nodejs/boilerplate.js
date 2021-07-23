const fs = require('fs');
const folderName = process.argv[2] || 'Project';
let data = "This is data";

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, data);
fs.writeFileSync(`${folderName}/app.js`, data);
fs.writeFileSync(`${folderName}/styles.css`, data);