const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('news', {title: pageTitle});
};

module.exports = {
    news
}