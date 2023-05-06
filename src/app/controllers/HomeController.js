class HomeController {
	index(req, res) {
		res.render("home",{unloggin: !req.session.loggedin});
	}
}

module.exports = new HomeController();
