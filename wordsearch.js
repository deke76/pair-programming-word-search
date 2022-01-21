const puzzle = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

const wordSearch = (letters, word) => {
  for (const row of letters) {
    if (row.join('').includes(word.toUpperCase())) return true;
  }
  for (const row of letters[0].map((col, i) => letters.map(row => row[i]))) {
    if (row.join('').includes(word.toUpperCase())) return true;
  };

  return false;
};

wordSearch(puzzle, 'veep');

module.exports = wordSearch;