const express = require("express");
const router = express.Router();

//setting up an routers
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/theme1', (req, res) => {
    res.render('theme-1/theme1'); 
});

router.get('/comming', (req, res) => {
    res.render('comming-soon/comming-soon'); 
});

router.get('/explore', (req, res) => {
    res.render('explore/explore'); 
});

module.exports = router;