"use static";

const fs = require("fs");

function fileseek(path, expression) {
    const result = [];

    fs.readdirSync(path).forEach(file => {
        const current = `${path}/${file}`;

        if (fs.lstatSync(current).isDirectory()) {
            result.push(...fileseek(current, expression));
        } else if (file.match(expression)) {
            result.push(current);
        }
    });

    return result;
}

module.exports = fileseek;
