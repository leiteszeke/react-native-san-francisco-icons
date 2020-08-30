const fs = require('fs');
const { execSync } = require('child_process');

const packageJson = require('./package.json');

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
  console.log(`This should update to ${version}`);

  packageJson.version = version;

  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
};

const commitVersioning = (newVersion) => {
  execSync('git status', { stdio: 'inherit' });

  execSync(
    'git config user.email ezequiel@leites.dev && git config user.name Ezequiel Leites',
  );

  execSync('git push origin :refs/tags/refs/heads/master');

  execSync(
    `git add . && git commit -m "Release ${branchPrefix}${newVersion}" && git push origin master -f`,
    { stdio: 'inherit' },
  );
};

const commitTag = (newVersion) => {
  execSync(
    `git tag ${branchPrefix}${newVersion} -m "Release ${branchPrefix}${newVersion}" && git push origin ${branchPrefix}${newVersion} -f `,
    { stdio: 'inherit' },
  );
};

// Get new version
const upgradedVersion = getNewVersion();
// Update package.json
updatePackageJson(upgradedVersion);
// Commit versioning
commitVersioning(upgradedVersion.version);
// Commit tag
commitTag(upgradedVersion.version);
