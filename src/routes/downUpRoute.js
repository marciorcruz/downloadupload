const express = require('express');
const multer = require('multer');

// Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload/')
    },
    filename: function (req, file, cb) {
        // Extração da extensão do arquivo original:
        const extensaoArquivo = file.originalname.split('.')[1];

        // Cria um código randômico que será o nome do arquivo
        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');

        // Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});

const upload = multer({ storage });

const router = express.Router();
const controller = require('../controllers/downUpController')
router.post('/', upload.single('arquivo'), controller.upload);
router.get('/',  controller.listFiles);
router.get('/:id', controller.download);
module.exports = router;