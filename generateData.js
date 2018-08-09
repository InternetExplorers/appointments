const fs = require('fs');

const adj = [
  'Tasty',
  'Gorgeous',
  'Awesome',
  'Unbranded',
  'Handcrafted',
  'Small',
  'Incredible',
  'Ergonomic',
  'Refined',
  'Licensed',
  'Scrumptious',
];

const append = (data) => {
  const chunks = [];
  let prevIdx = 0;
  for (let j = 0; j <= data.length; j += 10000) {
    chunks.push(data.slice(prevIdx, j).join('\n'));
    prevIdx = j;
  }
  for (let i = 1; i <= 100; i += 1) {
    fs.appendFileSync(`data${i}.csv`, chunks[i]);
  }
};

const makeUniqueBusinesses = (rounds) => {
  const storage = [];
  const makeCombos = (counter, combo = []) => {
    if (!counter) {
      storage.push([combo.join(' ')]);
    } else {
      for (let i = 0; i < adj.length; i += 1) {
        const element = adj[i];
        makeCombos(counter - 1, combo.concat(element));
      }
    }
  };
  makeCombos(rounds);
  append(storage);
};

makeUniqueBusinesses(7);
