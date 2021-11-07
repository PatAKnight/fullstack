const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('rooms', {title: pageTitle});
};

module.exports = {
    rooms
}