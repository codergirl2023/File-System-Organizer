// take dirPath and present directory and files as tree /f command 
let fs = require('fs');
let path = require('path');

function treeFn(dirPath) {
    if (!fs.existsSync(dirPath)) {
       dirPath = process.cwd();
    }
    treeHelperFn(dirPath, "");
}

function treeHelperFn(dirPath, indent) {
    // console.log("path = ", dirPath);

    let dirPathStats = fs.lstatSync(dirPath);
    if (dirPathStats.isFile()) {
        let fileName = path.basename(dirPath);
        console.log(indent+"├──"+fileName);
        return;
    }

    let content = fs.readdirSync(dirPath);
    for (let i = 0; i < content.length; i++) {
        contentStats = fs.lstatSync(path.join(dirPath,content[i]));
        if(contentStats.isDirectory())
            console.log(indent+ "└──"+ content[i]);
        treeHelperFn(path.join(dirPath, content[i]), indent + " ");
    }
}

module.exports = {
    treeKey: treeFn
}