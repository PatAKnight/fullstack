const fs = require('fs');
const room = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));

const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('rooms', {title: pageTitle, room});
};

module.exports = {
    rooms
}