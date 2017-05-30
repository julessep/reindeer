var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var loopCount = Math.min(colors.length, reindeer.length);

var currentColor = "";
var currentReindeer = "";

var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < loopCount; i ++) {
	currentColor = colors[i];
	currentReindeer = reindeer[i];

	var para = document.createElement("p");
	var t = document.createTextNode(currentColor + " " + currentReindeer);
	para.appendChild(t);
	hohohoElement.appendChild(para);
}
