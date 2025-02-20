import { createReadStream } from 'node:fs';
import readline from 'node:readline';

export class Transform {
  #filePath;

  constructor(filePath) {
    this.#filePath = filePath;
    this.statusCounts = {
      '200': 0,
      '404': 0,
      '500': 0
    };
  }

  start() {
    const stream = createReadStream(this.#filePath, { encoding: 'utf-8' });

    const rl = readline.createInterface({
      input: stream,
      output: process.stdout,
      terminal: false
    });

    let lineBuffer = [];

    rl.on('line', (line) => {
      lineBuffer.push(line);

      if (lineBuffer.length === 10) {
        this.processChunk(lineBuffer);
        lineBuffer = []; 
      }
    });

    rl.on('close', () => {
      if (lineBuffer.length > 0) {
        this.processChunk(lineBuffer); 
      }
      console.log(JSON.stringify(this.statusCounts, null, 2));
    });
  }

  processChunk(chunk) {
    chunk.forEach((line) => {
  
      const parts = line.split(' ');
      const statusCode = parts[parts.length - 1]; 


      if (this.statusCounts[statusCode] !== undefined) {
        this.statusCounts[statusCode]++;
      }
    });
  }
}
