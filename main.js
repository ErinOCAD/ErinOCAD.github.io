var img = document.getElementById("plant");
img.addEventListener("click", function()
	{
	
	if(img.src != "waterforever.gif") {
		img.setAttribute ("src", "waterforever.gif");
	}
	var stop = document.getElementById ("stop");
	stop.addEventListener("click", function()
	{
		img.setAttribute("src", "plant.png");
	})});
