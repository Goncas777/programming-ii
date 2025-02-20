import {Transform } from './stream.js';

const file = "log.csv";

const transform = new Transform(file);

transform.start();