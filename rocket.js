function change_state (state) {
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countdown_number = 10;
	document.getElementById('countdown').innerHTML = countdown_number;
	if (state == 2)	{
		timer = setInterval(function (){
			countdown_number = countdown_number-1;
			document.getElementById('countdown').innerHTML = countdown_number;
			if (countdown_number<=0) {
				change_state(3);	
			};
		}, 500);

	}else if (state == 3) {
		var success = setTimeout(function ()
			{
		var random_number = Math.round(Math.random() * 10);
		console.log(random_number)
		// success
		if (random_number > 5) {
			change_state(4);
		} else {
			change_state(5);
		}
}, 2000);
	};
}

var timer = null;
var countdown_number = 10;
