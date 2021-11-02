const express = require("express");
const router = express.Router();

//setting up an routers
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/theme1', (req, res) => {
    res.render('theme-1/theme1'); 
});

module.exports = router;