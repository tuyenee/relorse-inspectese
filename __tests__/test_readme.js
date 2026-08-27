const fs = require('fs');

test('README.md contains "I fixed the issue"', () => {
  const readme = fs.readFileSync('README.md', 'utf8');
  expect(readme).toContain('I fixed the issue');
});
