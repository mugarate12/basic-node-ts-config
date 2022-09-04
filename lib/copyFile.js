const path = require('path');
const fs = require('fs');
const colors = require('colors');
const exec = require('child_process').exec;

exports.copy = (projectName) => {
  console.log(colors.blue('Iniciando processos'));

  const projectDir = path.resolve(__dirname, '..', 'project');
  const pathToExecutable = process.cwd();
  
  console.log('--> Project dir: ', projectDir);
  console.log('--> Path to Executable: ', pathToExecutable);  
  console.log('--> Your project name: ', projectName);

  const newProjectFolder = path.resolve(pathToExecutable, projectName);
  const existsDirOfProject = fs.existsSync(newProjectFolder); // check if the project already exists

  if (existsDirOfProject) {
    console.log(colors.red('The project already exists'));
    process.exit(1);
  } else {
    fs.mkdirSync(newProjectFolder); // create the project folder
  }
  
  fs.cpSync(projectDir, newProjectFolder, { recursive: true }); // copy the project folder to the new project folder

  const command = `cd ${newProjectFolder}&&npm install`;
  console.log('--> Executing command: ', command);
  
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.log(colors.red(err));
      process.exit(1);
    }
    console.log(colors.green('Project created successfully'));
  });
}