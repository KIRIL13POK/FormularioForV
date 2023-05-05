const {Router} = require('express');
const router = Router();
const NuevoUsuario = require('../models/nuevosUsuarios')


router.get('/', (req, res) => {
    res.render('formulario', {
        title: 'Crear Cuenta',
        crearCuenta: true
    })
});

router.post("/", async (req, res) => {
    console.log(req.body)
    const nuevo_Usuario = new NuevoUsuario(req.body.nickname, req.body.first_name, req.body.last_name, req.body.email, req.body.password, req.body.repeatPassword)

     await nuevo_Usuario.save()

    res.redirect("./iniciar")
})







module.exports = router;