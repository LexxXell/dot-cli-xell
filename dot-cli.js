#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const doT = require('dot');
const { program } = require('commander');

program
  .version('1.0.0')
  .option('-t, --template <template>', 'Path to template file')
  .option('-j, --json <json>', 'Path to JSON data file')
  .option('-o, --output <output>', 'Path to output file')
  .parse(process.argv);

const options = program.opts();

if (!options.template || !options.json || !options.output) {
  console.error('Error: Please specify the template, json, and output files.');
  process.exit(1);
}

const templateContent = fs.readFileSync(path.resolve(options.template), 'utf-8');
const jsonData = JSON.parse(fs.readFileSync(path.resolve(options.json), 'utf-8'));

const template = doT.template(templateContent);
const output = template(jsonData);

fs.writeFileSync(path.resolve(options.output), output);

console.log('Template rendered successfully.');
