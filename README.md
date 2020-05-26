[![license](https://img.shields.io/github/license/diogoeichert/fileseek.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/fileseek.svg)](https://www.npmjs.com/package/fileseek)
[![downloads](https://img.shields.io/npm/dt/fileseek.svg)](https://www.npmjs.com/package/fileseek)

# fileseek
Search files in an folder recursively or non-recursive

## usage
```
npm install fileseek --save
```
Then:
```
const fileseek = require("fileseek");
fileseek("/path/to/dir", /expression/ [, recursive=false]);
```
