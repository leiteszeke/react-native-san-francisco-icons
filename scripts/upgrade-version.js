const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ora = require('ora');
const chalk = require('chalk');

const packageJson = require('../package.json');
const packageJsonFile = path.join(__dirname, '../package.json');

const [type, nextVersion] = process.argv.splice(2);
const branchPrefix = '';

const validateVersion = () => {
  const { version } = packageJson;
  if (nextVersion.match(/^(\d)(\.\d*)*/)) {
    const fromVersion = Number(version.split('.').join(''));
    let splittedVersion = nextVersion.split('.').join('');
    const toVersion = Number(
      splittedVersion[0] * 100 + splittedVersion[1] * 10 + splittedVersion[2],
    );

    if (toVersion > fromVersion) {
      return true;
    }

    throw new Error('This version number is lower or equal than actual.');
  }

  throw new Error('Bad version pattern. Check https://semver.org/');
};

const getNewVersion = () => {
  const { version } = packageJson;

  if (nextVersion) {
    if (validateVersion()) {
      return {
        version: nextVersion,
      };
    }
  }

  let splittedVersion = version.split('.');

  switch (type) {
    case 'major':
      splittedVersion[0] = Number(splittedVersion[0]) + 1;
      splittedVersion[1] = 0;
      splittedVersion[2] = 0;
      break;

    case 'minor':
      splittedVersion[1] = Number(splittedVersion[1]) + 1;
      splittedVersion[2] = 0;
      break;

    case 'patch':
      splittedVersion[2] = Number(splittedVersion[2]) + 1;
      break;

    default:
      throw new Error('Type should be major, minor or patch');
  }

  const newVersion = splittedVersion.join('.');

  return {
    version: newVersion,
  };
};

const updatePackageJson = ({ version }) => {
  const spinner = ora(
    `Updating ${chalk.blue('package.json')} to ${chalk.red(`v${version}`)}.`,
  ).start();

  packageJson.version = version;
  fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2));

  spinner.succeed(`${chalk.blue('package.json')} updated.`);
};

const commitVersioning = (newVersion) => {
  const spinner = ora('Running git status').start();
  execSync('git status', { stdio: 'inherit' });
  spinner.succeed();

  spinner.start(ora('Configuring git user')).start();
  execSync('git config user.email ezequiel@leites.dev');
  execSync('git config user.name Ezequiel Leites');
  spinner.succeed();

  spinner.start(ora('Add files')).start();
  execSync('git add .');
  spinner.succeed('Files added');

  spinner.start(ora('Commit files')).start();
  execSync(`git commit -m "Release v${branchPrefix}${newVersion}"`);
  spinner.succeed('Commit created');

  spinner.start(ora('Push branch')).start();
  execSync('git push origin master');
  spinner.succeed('Branch pushed');
};

const commitTag = (newVersion) => {
  const spinner = ora('Create new tag').start();
  execSync(
    `git tag v${branchPrefix}${newVersion} -m "Release v${branchPrefix}${newVersion}"`,
  );
  spinner.succeed('Tag created');

  spinner.start(ora('Push tag')).start();
  execSync(`git push origin v${branchPrefix}${newVersion}`);
  spinner.succeed('Tag pushed');
};

// Get new version
const upgradedVersion = getNewVersion();
// Update package.json
updatePackageJson(upgradedVersion);
// Commit versioning
commitVersioning(upgradedVersion.version);
// Commit tag
commitTag(upgradedVersion.version);
