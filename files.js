const fs = require('node:fs');

fs.readFile('user-data.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile('user-data.txt', 'username=Metin', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Wrote to file!');
  }
});
