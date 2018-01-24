const fsextra = require('fs-extra');
const { exec } = require('child_process');

fsextra.copy('./src/app/libex', './dist-lib', err => {
  if (err) return console.error(err);
  console.log('Copied files');
  createDeclarations();
});

function createDeclarations() {
  exec('cd dist-lib && tsc index.ts --declaration', () => {
    console.log('Generated declarations (and some JS files...)');
    createPackageJson();
  });
}

function createPackageJson() {
  const packageJSON =  {
    "name": "libex",
    "version": "2.0.0",
    "description": "How to build libraries with Angular (2, 4, 5...)",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/bersling/angular-library-example"
    },
    "keywords": [
      "Angular",
      "Angular2",
      "Library",
      "Example"
    ],
    "author": "bersling@gmail.com",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/bersling/angular-library-example/issues"
    },
    "homepage": "https://github.com/bersling/angular-library-example#readme",
    "types": "index.d.ts"
  };
  fsextra.writeJson('./dist-lib/package.json', packageJSON, {spaces: 2}, err => {
    if (err) return console.error(err);
    console.log('Created package.json');
  });

}
