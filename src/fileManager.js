const fs = require('fs')
module.exports = {
    createNewFile :(fileName) => {
        const fd = fs.openSync(fileName, 'w');
    },
    saveJsonToFile: (data, fileName) => {
        const jsonString = JSON.stringify(data);
        fs.writeFile(fileName, jsonString, 'utf-8',(err, data) => {
            if(err) throw err;
            console.log(`Save to file ${fileName}`);
        });
    },
    readFileData: (fileName) => {
        fs.readFile(fileName, (err, data) => {
            if(err) throw err;
            let jsonObject = JSON.parse(data);
            console.log(`Data from file is ${JSON.stringify(jsonObject.foods)}`);
        })
    }
}