"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const nodePath = require("path");
function fileseek(path, expression, recursive = true) {
    const result = [];
    path = nodePath.normalize(path);
    if (!fs.existsSync(path)) {
        console.error('The given path does not exist');
        return result;
    }
    fs.readdirSync(path).forEach(file => {
        const current = nodePath.join(path, file);
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