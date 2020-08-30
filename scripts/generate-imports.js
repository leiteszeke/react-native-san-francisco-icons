const path = require('path');
const fs = require('fs');
const iconsDir = path.join(__dirname, '../src/icons');
const indexFile = `${iconsDir}/index.ts`;

const readDir = (dir) =>
  fs.readdirSync(dir, (err, files) => {
    if (err) {
      throw new Error('Unable to scan directory: ' + err);
    }

    return files;
  });

const readImports = (files) => {
  let imports = '';

  files.forEach((file) => {
    imports += `export { default as ${file} } from './${file}';\r\n`;
  });

  return imports;
};

try {
  const files = readDir(iconsDir)
    .filter((file) => file !== 'index.ts')
    .map((file) => file.replace('.tsx', ''));

  const indexFileContent = readImports(files);

  fs.writeFileSync(indexFile, indexFileContent);
} catch (e) {
  console.error(e);
}
