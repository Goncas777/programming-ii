#!/usr/bin/env node

import { sum, average, median } from './mathutility.js';

const numbers = [1,4,56,2,5,1,74,21];


const command = process.argv[2];


switch (command) {
  case 'sum':
    console.log(`Sum: ${sum(numbers)}`);
    break;
  case 'average':
    console.log(`Average: ${average(numbers)}`);
    break;
  case 'median':
    console.log(`Median: ${median(numbers)}`);
    break;
  default:
    console.log('Comando inválido. Use "sum", "average" ou "median".');
}



