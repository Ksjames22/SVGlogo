const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { generateSVG, writeToFile } = require('./lib/svgRenderer');

async function promptUser() {
  const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: input => input.length <= 3 ? true : 'Text must be up to 3 characters long',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape for the logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
    },
  ]);

  let shape;
  switch (shapeType) {
    case 'Circle':
      shape = new Circle();
      break;
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Square':
      shape = new Square();
      break;
  }
  shape.setColor(shapeColor);

  const svg = generateSVG(shape, text, textColor, shapeColor);
  writeToFile('logo.svg', svg);
}

promptUser();
