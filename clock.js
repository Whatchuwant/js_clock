// placing these global vars outside, so that they change only when the specific hr/min change 
var sav_m = 60;
var sav_h = 24;
var c = 0;
// the actual clock with array colors
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var colors = ['#6600FF', '#007A3D', '#990000', '#FFFF94', '#0099CC'];
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
// statements to change background for minutes and hours
    if (m !== sav_m){
    	sav_m = m;
    	if (m % 5 === 0){
	    	document.body.style.backgroundColor= getRandomColor();
	    }
	    else if (m % 2 === 0) {
	    	document.body.style.backgroundColor= "#993D7A";
	    }
	    else {
	    	document.body.style.backgroundColor= "black";
	    }
		if (h !== sav_h){
			sav_h = h;
			document.getElementById('txt').style.color = colors[c];
			c = c + 1;
			if (c > 4){
				c = 0;
			}
		}	
	}
// runs startTime function every 500 milliseconds 
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}
// this is the function to randomize colors
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
