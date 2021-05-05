#!/usr/bin/env node
import { Command } from 'commander';
//import pack from '../package.json';

const program = new Command();
//const pkg = new pack();
program
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('0.0.1')
  .parse(process.argv);