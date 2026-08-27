const fs = require('fs');
const assert = require('assert');

const readme = fs.readFileSync('README.md', 'utf8');
assert.ok(readme.includes('fixed the issue'), 'README.md must contain "fixed the issue"');

console.log('PASS: README.md contains "fixed the issue"');
