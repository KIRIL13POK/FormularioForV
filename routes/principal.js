const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('principal', {
        title:'PaginaPrincipal',
        esLaPrincipal: true
    })

});

module.exports = router;