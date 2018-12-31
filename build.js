'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const carden = require('carden');

// Theme
const colors = {
  primary: 'blue',
  secondary: 'white',
  tertiary: 'green',
  label: 'black',
};

// Data
const data = {
  name: 'Ryan Tauriainen',
  handle: 'MrTarantula',
  work: 'Web Developer at APMEX',
  twitter: 'ryantarantula',
  github: 'mrtarantula',
  npm: '~mrtarantula',
  linkedin: 'ryantauriainen',
  web: 'https://ryant.io',
  npx: 'npx mrtarantula',
};

// Labels
const labels = {
  work: '      Work:',
  twitter: '   Twitter:',
  github: '    GitHub:',
  npm: '       npm:',
  linkedin: '  LinkedIn:',
  web: '       Web:',
  npx: '      Card:',
}

// Theming functions
const primary = x => chalk.keyword(colors.primary)(x);
const secondary = x => chalk.keyword(colors.secondary)(x);
const tertiary = x => chalk.keyword(colors.tertiary)(x);
const label = x => chalk.keyword(colors.label).bold(x);

// Options for carden
const options = {
  borderStyle: 'blank',
  margin: 1,
  padding: 1,
  header: {
    backgroundColor: colors.primary,
  },
  content: {
    backgroundColor: colors.secondary,
  }
};

const header = `${secondary(data.name)} / ${tertiary(data.handle)}`;

const content = [
  `${label(labels.work)}  ${label(data.work)}`,
  `${label(labels.twitter)}  ${primary('https://twitter.com/' + data.twitter)}`,
  `${label(labels.github)}  ${primary('https://github.com/' + data.github)}`,
  `${label(labels.npm)}  ${primary('https://npmjs.com/' + data.npm)}`,
  `${label(labels.linkedin)}  ${primary('https://linkedin.com/in/' + data.linkedin)}`,
  `${label(labels.web)}  ${primary(data.web)}`,
  ``,
  `${label(labels.npx)}  ${primary(data.npx)}`
];

fs.writeFileSync(path.join(__dirname, 'bin/output'), carden(header, content.join('\n'), options));