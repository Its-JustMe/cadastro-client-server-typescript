import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

const templatePath = path.join(__dirname, '..', 'views', 'index.ejs');
const outputPath = path.join(__dirname, '..', 'public', 'index.html');

const data = {}; 

ejs.renderFile(templatePath, data, {}, function (err, str) {
  if (err) {
    console.error('Erro ao renderizar o template EJS:', err);
    process.exit(1);
  }

  fs.writeFileSync(outputPath, str);
  console.log('Arquivo HTML gerado com sucesso:', outputPath);
});
