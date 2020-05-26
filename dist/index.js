"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function fileseek(path, expression, recursive = true) {
    const result = [];
    if (!fs.existsSync(path)) {
        console.error('The given path does not exist');
        return result;
    }
    fs.readdirSync(path).forEach(file => {
        const current = `${path}/${file}`;
        if (fs.lstatSync(current).isDirectory() && recursive) {
            result.push(...fileseek(current, expression));
        }
        else if (file.match(expression)) {
            result.push(current);
        }
    });
    return result;
}
exports.default = fileseek;
//# sourceMappingURL=index.js.map