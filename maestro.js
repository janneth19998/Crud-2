const express = require('express');
const router= express.Router();
const maestroControl = require('../controllers/maestroControl');

//Controlador de  crud maestros
router.get('/', maestroControl.list);
router.post('/add', maestroControl.agregar);
router.get('/delete/:id', maestroControl.delete);
router.get('/update/:id', maestroControl.edit);
router.post('/update/:id', maestroControl.actualizar);


module.exports = router;