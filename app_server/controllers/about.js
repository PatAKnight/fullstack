const about = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('about', {title: pageTitle});
};

module.exports = {
    about
}