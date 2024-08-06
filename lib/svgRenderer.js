const fs = require('fs');
const path = require('path');

function generateSVG(shape, text, textColor, shapeColor) {
  const shapeSVG = shape.render();
  return `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeSVG}
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
  console.log('Generated logo.svg');
}

module.exports = { generateSVG, writeToFile };
