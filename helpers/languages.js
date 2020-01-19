const axios = require('axios');
const lang = [];
const lang_data = [];
const result = {
    status: null,
    data: null
};
// TO SORT THE LIST OF LANGS BY REPO COUNT
function compare(a, b) {
    return b.number_of_repos - a.number_of_repos;
}
// GET TO TRENDING REPOS FROM GITHUB API
const getMostTrendingRepos = async () => {
    // CLEAR ARRAYS 
    lang_data.length = 0;
    lang.length = 0;
    await axios.get('https://api.github.com/search/repositories?page=1&per_page=100&q=stars:>=10000+is:public&sort=stars&order=desc')
        .then(response => {
            result.status = response.status;
            result.data = response.data;
        })
        .catch(error => {
            result.status = error.status;
        });
    if (result.status == 200) {
        // LOOP THEOUGHT REPOS AND ADD LANGUAGE TO AN ARRAY WITHOUT DOUBLICATIONG
        result.data.items.forEach(item => {
            // SOMTHIMES THE VALUE OF LANG IS NULL
            if (item.language != null && lang.indexOf(item.language) === -1) {
                lang.push(item.language);
                lang_data.push(
                    {
                        name: item.language,
                        number_of_repos: 1,
                        repos_list: [item.full_name]
                    }
                );
            }
            else if (item.language != null) {
                var index = lang.indexOf(item.language);
                lang_data[index].number_of_repos++;
                lang_data[index].repos_list.push(item.full_name);
            }

        });
        // SORT LANGUAGES BY REPO COUNT
        lang_data.sort(compare);
    }
};

module.exports = {
    getMostTrendingRepos,
    result,
    lang_data
};


