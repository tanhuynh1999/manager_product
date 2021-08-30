class SiteController {
    getHome = (req, res) => {
        res.render('site/home');
    };
}

module.exports = new SiteController();


