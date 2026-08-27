const fs = require('fs');
const assert = require('assert');

const readme = fs.readFileSync('README.md', 'utf8');
assert.ok(readme.includes('I fixed the issue'), 'README.md must contain "I fixed the issue"');

console.log('PASS: README.md contains "I fixed the issue"');
