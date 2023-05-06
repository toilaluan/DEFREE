class HomeController {
	index(req, res) {
		if(!req.session.loggedin){
			res.render("home",{unloggin: true});
		}
		else{
			res.render("home",{unloggin: false});
		}
	}
}

module.exports = new HomeController();
