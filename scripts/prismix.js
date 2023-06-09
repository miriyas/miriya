/* eslint-disable */

const fs = require('fs');
const path = require('path');

function findFilesWithExtensionAndExcludeSchema(folderPath, extension, excludedSchema) {
    const files = [];

    function traverseDirectory(currentPath) {
        const items = fs.readdirSync(currentPath);

        for (const item of items) {
            const itemPath = path.join(currentPath, item);
            const stat = fs.statSync(itemPath);

            if (stat.isDirectory()) {
                traverseDirectory(itemPath);
            } else if (path.extname(itemPath) === extension && !item.includes(excludedSchema)) {
                files.push(itemPath);
            }
        }
    }

    traverseDirectory(folderPath);

    return files;
}

// 사용 예시
const rootPath = path.join(__dirname, '../');
const folderPath = path.join(__dirname, '../prisma');
const targetPath = path.join(rootPath, 'prismix.config.json');
const extension = '.prisma';
const excludedSchema = 'schema';

const filePaths = findFilesWithExtensionAndExcludeSchema(folderPath, extension, excludedSchema);
const prismaPaths = filePaths
    .filter((path) => path.includes('modules'))
    .map((path) => path.replace(rootPath, ''));

const mixers = {
    mixers: [
        {
            input: prismaPaths,
            output: 'prisma/schema.prisma',
        },
    ],
};

fs.writeFileSync(targetPath, JSON.stringify(mixers, null, 2), {
    encoding: 'utf-8',
});