// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);

// Create a variable to store the dir part of the filePath variable
const dir = filePath.slice(filePath.indexOf("/"), filePath.lastIndexOf("/"));
console.log(dir);

// Create a variable to store the ext part of the variable    .txt   file.txt
const ext = filePath.slice(filePath.lastIndexOf("."));
console.log(ext);
