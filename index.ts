import * as fs from 'fs';
import * as nodePath from 'path';

export default function fileseek(path: string, expression: RegExp, recursive: boolean = true): string[] {
    const result: string[] = [];

    path = nodePath.normalize(path);

    if(!fs.existsSync(path)) {
        console.error('The given path does not exist');
        return result;
    }

    fs.readdirSync(path).forEach(file => {
        const current = nodePath.join(path, file);

        if (fs.lstatSync(current).isDirectory() && recursive) {
            result.push(...fileseek(current, expression));
        } else if (file.match(expression)) {
            result.push(current);
        }
    });

    return result;
}