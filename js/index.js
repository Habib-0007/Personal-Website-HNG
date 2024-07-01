var todayText =
	document.querySelector(".today");
var utcTime =
	document.querySelector(".utcDate");

var date = new Date();
var today = date.getDay();

var text;

switch (today) {
	case 0:
		text = "Sunday";
		break;
	case 1:
		text = "Monday";
		break;
	case 2:
		text = "Tuesday";
		break;
	case 3:
		text = "Wednesday";
		break;
	case 4:
		text = "Thursday";
		break;
	case 5:
		text = "Friday";
		break;
	case 6:
		text = "Saturday";
		break;

	default:
		text = "Random day 😊";
}

todayText.textContent = `${text}`;

const mainTime = date.toUTCString();
utcTime.textContent = `${mainTime}`;
