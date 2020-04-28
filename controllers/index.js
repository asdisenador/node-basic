const index = (req, res) => {
	res.render('index', {
		title: 'Mag General Business',
	});
	res.end();
}

module.exports = {
	index
}