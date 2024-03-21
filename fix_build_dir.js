const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'build');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}
