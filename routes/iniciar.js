const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.render('iniciar', {
        title: 'Iniciar sesion',
        iniciarSesion: true
    })
});

router.post("/", (req, res) => {
    console.log(req.body)
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    // console.log(`User Email: ${userEmail}`);
    // console.log(`Password: ${password}`);
    if(userEmail === 'node_js@mail.ru' && userPassword === 'V8'){
        res.redirect("./dentro")
    }else{
        res.redirect("./recuperarPass")
    }
});

module.exports = router;