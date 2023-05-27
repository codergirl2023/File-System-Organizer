let path = require("path");

let fs = require("fs");
const utility = require("../utility");

let types = utility.types

function organizeFn(dirPath) {
    // 1. take path as argument
    // 2. create organized_file folder
    // 3. create category folder inside organized_file folder
    // 4. recursively :-
    //     a. if directory path is file copy it inside organized_file->category
    //     b. else call the function to copy files inside that folder
    // createDirectories()

    let organizedFilesDirPath = path.join(dirPath, "organized_files");
    console.log("***************ORGANIZING FILES***************");
    if (!fs.existsSync(organizedFilesDirPath)) {
        fs.mkdirSync(organizedFilesDirPath);
    } 
    organizeHelperFn(dirPath, organizedFilesDirPath);

}

function organizeHelperFn(srcPath, destPath) {
    // console.log("***************ORGANIZING FILES")

    let content = fs.readdirSync(srcPath);

    for (let i = 0; i < content.length; i++) {
        // console.log("content = ", content[i]);
        let test = fs.lstatSync(path.join(srcPath, content[i])).isFile();
        if (test) {

            copyFileContentFn(srcPath, content[i], destPath)
        } else {
            organizeHelperFn(path.join(srcPath, content[i]), destPath);
        }
    }
}

function copyFileContentFn(srcPath, fileName, destPath) {
    let srcFilePath = path.join(srcPath, fileName);
    let category = getCategory(srcFilePath);

    let destExtPath = path.join(destPath, category);

    if (!fs.existsSync(destExtPath)) {
        //find type of the ext
        fs.mkdirSync(destExtPath);

    }
    let destFilePath = path.join(destExtPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    // fs.unlinkSync(srcFilePath);
    console.log("file copied from ", srcFilePath, " to ", destPath);
}

function getCategory(srcPath) {
    let ext = path.extname(srcPath).slice(1);
    let belongsTo = null;
    for (const type in types) {
        let extensions = types[type];
        extensions.forEach(element => {
            if (element == ext) {
                belongsTo = type;
            }
        });
        if (belongsTo == null)
            belongsTo = "other";

        // console.log(`${type}: ${types[type]}`);
    }
    return belongsTo;
}

module.exports = {
    "organizeKey": organizeFn
}