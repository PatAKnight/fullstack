const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('meals', {title: pageTitle});
};

module.exports = {
    meals
}