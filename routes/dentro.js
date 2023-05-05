const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('dentro', {
        title: 'dentro',
        
    })
});

module.exports = router;