const express = require('express');
const { getMostTrendingRepos, result, lang_data } = require('../helpers/languages');
const isAuth = require('../helpers/isAuth');

const router = express.Router();

router.get('/', isAuth, async (req, res) => {
    // WAIT FOR DATA TO COME FROM THE GITHUB API 
    await getMostTrendingRepos();
    if (result.status == 200) {
        res.status(200);
        res.json({ languages: lang_data });
    }
    else {
        res.status(500);
        res.send('somthing wrong happend');
    }
});
module.exports = router;