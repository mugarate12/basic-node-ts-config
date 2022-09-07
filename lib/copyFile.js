const path = require('path');
const fs = require('fs');
const colors = require('colors');
const exec = require('child_process').exec;

function initializeProject(projectName) {
  const goToDirectory = `cd ${projectName}`;
  const installDependencies = 'npm install';
  const changeName = `npm pkg set name=${projectName}`;

  const command = `${goToDirectory}&&${installDependencies}&&${changeName}`;

  const commandProcess = exec(command);
  
  commandProcess.stdin.on('data', (data) => console.log(data));
  commandProcess.stdout.on('data', (data) => console.log(data));
  commandProcess.stderr.on('data', (data) => console.log(data));
  
  commandProcess.on('close', (code) => {
    console.log(colors.green('Project created successfully'));
    console.log(colors.green('Thanks for using the CLI'));
  });
}

exports.copy = (projectName) => {
  console.log(colors.blue('Initializing project...'));

  const projectDir = path.resolve(__dirname, '..', 'project');
  const pathToExecutable = process.cwd();

  const newProjectFolder = path.resolve(pathToExecutable, projectName);
  const existsDirOfProject = fs.existsSync(newProjectFolder); // check if the project already exists

  if (existsDirOfProject) {
    console.log(colors.red('The project already exists'));
    process.exit(1);
  } else {
    fs.mkdirSync(newProjectFolder); // create the project folder
  }
  
  console.log(colors.blue('Creating project structure...'));
  fs.cpSync(projectDir, newProjectFolder, { recursive: true }); // copy the project folder to the new project folder

  initializeProject(projectName);
}