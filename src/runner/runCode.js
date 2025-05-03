const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCCode(code, callback) {
    const workDir = path.join(__dirname, 'temp');
    const filePath = path.join(workDir, 'code.c');
    const exePath = path.join(workDir, 'a.out');

    if (!fs.existsSync(workDir)) {
        fs.mkdirSync(workDir);
    }

    fs.writeFileSync(filePath, code);

    const compileCmd = `gcc ${filePath} -o ${exePath}`;
    const runCmd = `${exePath}`;

    exec(compileCmd, (compileErr, stdout, stderr) => {
        if (compileErr) {
            return callback(`Compilation Error:\n${stderr}`);
        }

        exec(runCmd, { timeout: 3000 }, (runErr, output, runStderr) => {
            if (runErr) {
                return callback(`Runtime Error:\n${runStderr || runErr.message}`);
            }

            callback(null, output);
        });
    }); 
}

module.exports = { runCCode };
