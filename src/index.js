// import http from 'http';
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
//
// console.log('Server running at http://127.0.0.1:1337/');
// console.log('Met qua troi oi');
import fileManager from './fileManager';

const fileName = __dirname + '/../data/temp.txt';
fileManager.createNewFile(fileName);
let jsonObject = {
    foods: [
        {
            "name": "aaa",
            "title": "b"
        },
        {
            "name": "dd",
            "title": "ff"
        },
    ],
    statusCode: 200,
    fullName: "tuandz"
};
fileManager.saveJsonToFile(jsonObject, fileName);
jsonObject = {...jsonObject, address: "aaaaaa"};
fileManager.saveJsonToFile(jsonObject, fileName);
fileManager.readFileData(fileName);
