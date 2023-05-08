const fs = require('fs');
const path = require('path');

const pathToFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFolder, {withFileTypes: true}, (err, files) => {
  if (err) throw err;

  console.log('Папка содержит следующие файлы:');

  files.forEach(file => {
    if (file.isFile()) {
      const pathToFile = path.join(pathToFolder, file.name);
      fs.stat(pathToFile, (err, stats) => {
        if (err) throw err;

        const extname = path.extname(file.name);
        const name = path.basename(file.name, extname);
        const size = stats.size;

        const resultOutput = `${name} - ${extname.slice(1)} - ${size}B`;
        console.log(resultOutput);
      });
    }
  });
});
