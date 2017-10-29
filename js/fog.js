

$( document ).ready(function() {



	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	canvas.width = innerWidth;

	canvas.height = innerHeight;
   /* canvas.width = 1000;
   canvas.height = 1000;*/

    // smokemachine(context, [r,g,b])
    var party = smokemachine(ctx, [206, 206, 206]);

    // start animating
   party.start(); 

	/*onmousemove = function (e) {
		var x = e.clientX
		var y = e.clientY
		var n = .5
		var t = Math.floor(Math.random() * 200) + 3800
		party.addsmoke(x, y, n, t)
	}*/

	setInterval(function(){
		party.addsmoke(innerWidth/2, innerHeight, 1)
	}, 100)

    






});