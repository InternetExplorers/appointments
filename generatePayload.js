const fs = require('fs');

const contents = [];
for (let i = 0; i < 1000000; i += 1) {
  const gen = () => Math.floor(Math.random() * 1000000) + 9000000;
  contents.push(`${gen()},${gen()}\n`);
}

fs.writeFileSync('payload.csv', contents.join(''));
