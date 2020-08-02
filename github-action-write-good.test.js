const writeGood = require('./github-action-write-good');

test('succeeds on a good file', async () => {
  await expect(writeGood('test/README_GOOD.md')).resolves.toBe('');
});

test('catches violations in a bad file', async () => {
  const rgx = /"was stolen" may be passive voice on line 3 at column 11/
  await expect(writeGood('test/README_BAD.md')).rejects.toThrow(rgx);
});

test('catches violations in a bad set of files', async () => {
  const rgx = /"was stolen" may be passive voice on line 3 at column 11/
  await expect(writeGood('test/**/*.md')).rejects.toThrow(rgx);
});
