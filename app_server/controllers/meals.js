const fs = require('fs');
const meal = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'));

const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('meals', {title: pageTitle, meal});
};

module.exports = {
    meals
}