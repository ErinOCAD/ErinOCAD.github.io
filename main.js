var water = document.getElementById("plant");
water.addEventListener("click", function()
	{
	
	if(water.src != "waterforever.gif") {
		water.setAttribute("src", "waterforever.gif");
		
		
	}
	var stop = document.getElementById ("stop");
	stop.addEventListener("click", function()
	{
		water.setAttribute("src", "plant.png");
		
	})});

var bunny = document.getElementById("bunny");
bunny.addEventListener("click", function()
	{
	var speech = document.getElementById("speech");
	speech.setAttribute("src", "heythere.png");
	speech.setAttribute("width", "300px");
	speech.setAttribute("height", "300px");
	
});

