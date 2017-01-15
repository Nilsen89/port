connection.query('insert into articles set ?', insert, 
	function(err, res) {
		if(err) {
			console.error(err);
			return;
		}
		return res;
	}
);
