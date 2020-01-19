const express = require('express');
const { getMostTrendingRepos, result, lang_data } = require('../helpers/languages');

const router = express.Router();

router.get('/', async (req, res) => {
    await getMostTrendingRepos();
    if (result.status == 200) {
        res.status(200);
        res.json(lang_data);
    }
    else {
        res.status(500);
        res.send('somthing wrong happend');
    }
});
module.exports = router;