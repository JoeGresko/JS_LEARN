function do_something () {
	var current_class_name = document.getElementById('cool').className;

	if (current_class_name == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else	{
		document.getElementById('cool').className = 'cool';
	}
	


	// changes class name
	// document.getElementById('cool').className = 'cool red';
}




var car = {
	make: 'BMV',
	type: 'Polo',
	color: 'blue',
	is_turned_on: false,
	number_wheels: 4,
	seats: [
	'seat1', 
	'seat2', 
	'seat3', 
	'seat4'
	],
ignite: function () {
	this.is_turned_on = true;
	return('Brrrrrrr');
	},
fly: function () {
	alert ('fly');
	},
swap: function (is_on) {
	console.log('turn car' + is_on)
	if (is_on == true) {
		this.is_turned_on = true;
		} else {
			this.is_turned_on = false;
			}
	}
};
	