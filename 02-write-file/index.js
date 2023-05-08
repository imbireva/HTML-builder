const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const exit = () => {
  stdout.write('До свидания!');
  process.exit();
};

const writeFile = () => {
  const filePath = path.join(__dirname, 'text.txt');

  const writeStream = fs.createWriteStream(filePath);

  stdout.write('Добрый день! Создан новый текстовый файл.\nВведите пожалуйста текст для записи...\n');

  process.on('SIGINT', () => exit());

  stdin.on('data', data => {
    const userInput = data.toString();
    if (userInput.trim() === 'exit') exit();
    else writeStream.write(userInput);
  });
};

writeFile();
