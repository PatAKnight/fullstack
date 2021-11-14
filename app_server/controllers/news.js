const fs = require('fs');
const newsl = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));

const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('news', {title: pageTitle, newsl});
};

module.exports = {
    news
}