const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCCode(code, callback) {
    const filePath = path.join(__dirname, 'temp.c');
    const outputPath = path.join(__dirname, 'temp.out');

    fs.writeFileSynce(filePath, code);

    const compile = spawn('gcc', [filePath, '-o', outputPath]);

    compile.on('close', (code) => {
        if (code === 0) {
            const run = spawn(outputPath);
            let result = '';

            run.stdout.on('data', data => result += data.toString());
            run.stderr.on('data', data => result += data.toString());

            run.on('close', () => callback(null, result));
        } else {
            callback('Compilation failed', null);
        }
    });
}

module.exports = { runCCode };