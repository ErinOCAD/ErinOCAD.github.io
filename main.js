var img = document.getElementById("plant");
img.addEventListener("click", function()
	{
	
	if(img.src != "waterforever.gif") {
		img.setAttribute("src", "waterforever.gif");
	}
	var stop = document.getElementById ("stop");
	stop.addEventListener("click", function()
	{
		img.setAttribute("src", "plant.png");
	})});

var bunny = document.getElementById("bunny");
bunny.addEventListener("click", function()
	{
	var speech = document.getElementById("speech");
	speech.setAttribute("src", "heythere.png");
	speech.setAttribute("width", "300px");
	speech.setAttribute("height", "300px");
	
});

