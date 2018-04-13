function turnRight() {

	var img = document.getElementById("myImg");
	var leftAndRight = document.getElementById("leftAndRight");

	if (img.style.transform == 'rotate(90deg)') {
		img.style.transform = 'rotate(180deg)';
		leftAndRight.style.cssText = "margin-top: 5px";
	} else if (img.style.transform == 'rotate(180deg)') {
		img.style.transform = 'rotate(-90deg)';
		leftAndRight.style.cssText = "margin-top: 5%";
	} else if (img.style.transform == 'rotate(-90deg)') {
		img.style.transform = 'rotate(0deg)';
		leftAndRight.style.cssText = "margin-top: 5px";
	} else {
		img.style.transform = 'rotate(90deg)';
		leftAndRight.style.cssText = "margin-top: 5%";
	}

}

function turnLeft() {

	var img = document.getElementById("myImg");
	var leftAndRight = document.getElementById("leftAndRight");

	if (img.style.transform == 'rotate(-90deg)') {
		img.style.transform = 'rotate(180deg)';
		leftAndRight.style.cssText = "margin-top: 5px";
	} else if (img.style.transform == 'rotate(180deg)') {
		img.style.transform = 'rotate(90deg)';
		leftAndRight.style.cssText = "margin-top: 5%";
	} else if (img.style.transform == 'rotate(90deg)') {
		img.style.transform = 'rotate(0deg)';
		leftAndRight.style.cssText = "margin-top: 5px";
	} else {
		img.style.transform = 'rotate(-90deg)';
		leftAndRight.style.cssText = "margin-top: 5%";
	}

}

function turn180() {

	var img = document.getElementById("myImg");
	var leftAndRight = document.getElementById("leftAndRight");
	
	if (img.style.transform == 'rotate(180deg)') {
		img.style.transform = 'rotate(0deg)';
		leftAndRight.style.cssText = "margin-top: 5px";
	} else if (img.style.transform == 'rotate(90deg)') {
		img.style.transform = 'rotate(-90deg)';
		leftAndRight.style.cssText = "margin-top: 5%";
	} else if (img.style.transform == 'rotate(-90deg)') {
		img.style.transform = 'rotate(90deg)';
		leftAndRight.style.cssText = "margin-top: 5%";
	} else {
		img.style.cssText = "transform: rotate(180deg);";
		leftAndRight.style.cssText = "margin-top: 5px";
	}

}
