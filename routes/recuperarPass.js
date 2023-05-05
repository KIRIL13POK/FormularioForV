const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('recuperarPass', {
        title: 'Recuperar Password',
        recuperarPass: true
    })
});

module.exports = router;