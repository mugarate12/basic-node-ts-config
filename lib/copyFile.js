const path = require('path');
const fs = require('fs');
const colors = require('colors');
const exec = require('child_process').exec;

function execCommandPromissed(command, showProgress, successfullyMessage = '') {
  return new Promise((resolve, reject) => {
    const commandProcess = exec(command);
    
    commandProcess.stdin.on('data', (data) => showProgress ? console.log(data) : null);
    commandProcess.stdout.on('data', (data) => showProgress ? console.log(data) : null);
    commandProcess.stderr.on('data', (data) => showProgress ? console.log(data) : null);
    
    commandProcess.on('close', (code) => {
      if (successfullyMessage) console.log(colors.green(successfullyMessage));
      resolve();
    });

    commandProcess.on('error', (error) => {
      console.log(colors.red(error));
      reject();
    });
  });
}

async function initializeProject(projectName) {
  const goToDirectory = `cd ${projectName}`;
  const installDependencies = 'npm install';
  const changeName = `npm pkg set name=${projectName}`;

  const command = `${goToDirectory}&&${installDependencies}&&${changeName}`;
  await execCommandPromissed(command, true, 'All dependencies installed successfully');

  const gitInit = 'git init';
  const gitAddAll = 'git add *';
  const gitCommit = 'git commit -m ":tada: Initial commit with basic-node-ts-config by Mateus Cardoso"';
  await execCommandPromissed(`${goToDirectory}&&${gitInit}&&${gitAddAll}&&${gitCommit}`, false);

  console.log(colors.green('Project initialized successfully'));
  console.log(colors.dim(`\nTo start the project, go to ${projectName} folder and run the command:`));
  console.log(colors.dim.italic('npm run dev'));

  process.exit(0);
}

exports.copy = async (projectName) => {
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

  await initializeProject(projectName);
}