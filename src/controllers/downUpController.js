const fs = require("fs");

exports.listFiles = (req, res, next) => {
    const directoryPath = "/home/liqi-dev/Documents/marciorcruz/downloadupload/public/upload/";
    const baseUrl = "http://localhost:3000/file/";
    console.log(directoryPath)
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }
        let fileInfos = [];
        files.forEach((file) => {
            fileInfos.push({
                url: baseUrl + file,
            });
        });
        res.status(200).send(fileInfos);
    });
};

exports.upload = (req, res, next) => {
    res.status(201).send(`Arquivo recebido ${req.file}`);
};

exports.download = (req, res, next) => {
    const fileName = req.params.id;
    const directoryPath = "/home/liqi-dev/Documents/marciorcruz/downloadupload/public/upload/";
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};