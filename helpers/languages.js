const axios = require('axios');
const lang = [];
var lang_data = [];
const result = {
    status: null,
    data: null
};
const getMostTrendingRepos = async () => {
    await axios.get('https://api.github.com/search/repositories?page=1&per_page=100&q=is:public&sort=stars&order=desc')
        .then(response => {
            result.status = response.status;
            result.data = response.data;
        })
        .catch(error => {
            result.status = error.status;
        });
    if (result.status == 200) {
        result.data.items.forEach(item => {
            if (item.language != null && lang.indexOf(item.language) === -1) {
                lang.push(item.language);
                lang_data.push(
                    {
                        language: item.language,
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
    }
};

module.exports = {
    getMostTrendingRepos,
    result,
    lang_data
};


