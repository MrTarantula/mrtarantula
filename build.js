'use strict';

// Pull in our modules
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

// User data
const data = {
  name: 'Ryan Tauriainen',
  handle: 'MrTarantula',
  work: 'Web Developer at APMEX',
  twitter: 'https://twitter.com/ryantarantula',
  github: 'https://github.com/mrtarantula',
  linkedin: 'https://linkedin.com/in/ryantauriainen',
  web: 'https://ryant.io',
  npx: 'npx mrtarantula',
};

// Coloring functions
const primary = x => chalk.keyword(colors.primary)(x);
const secondary = x => chalk.keyword(colors.secondary)(x);
const tertiary = x => chalk.keyword(colors.tertiary)(x);
const label = x => chalk.keyword(colors.label).bold(x);

// Define options for carden
const options = {
  padding: 1,
  margin: 1,
  header: {
    borderStyle: 'round',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  content: {
    borderColor: colors.tertiary,
    backgroundColor: colors.secondary,
  }
};

// Labels
const labels = {
  work: '      Work:',
  twitter: '   Twitter:',
  gitHub: '    GitHub:',
  linkedIn: '  LinkedIn:',
  web: '       Web:',
  card: '      Card:',
}

// Actual strings we're going to output
const header = `${secondary(data.name)} / ${tertiary(data.handle)}`;

const working = `${label(labels.work)}  ${label(data.work)}\n`;
const twittering = `${label(labels.twitter)}  ${primary(data.twitter)}\n`;
const githubing = `${label(labels.gitHub)}  ${primary(data.github)}\n`;
const linkedining = `${label(labels.linkedIn)}  ${primary(data.linkedin)}\n`;
const webing = `${label(labels.web)}  ${primary(data.web)}\n`;
const carding = `${label(labels.card)}  ${primary(data.npx)}\n`;

// Put all our output together into a single variable
const content =
  working +
  twittering +
  githubing +
  linkedining +
  webing +
  '\n' +
  carding;

fs.writeFileSync(path.join(__dirname, 'bin/output'), carden(header, content, options));
