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
	