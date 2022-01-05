const { Router } = require('express')
const NivelController = require('../controllers/NivelController')


const router = Router()

router.get('/niveis', NivelController.listaNiveis)
router.get('/niveis/:id', NivelController.selecionaUmNivel)
router.post('/niveis', NivelController.criaNivel)
router.put('/niveis/:id', NivelController.atualizarNivel)
router.delete('/niveis/:id', NivelController.deletarNivel)


module.exports = router