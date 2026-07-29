const fs = require('node:fs');

fs.readFile('/file.json', (err, data) => {
  if (err) {
    console.log(err);
    return; // stop here, don't touch `data`
  }
  console.log(data); // safe to use
});