function day(){
    document.getElementById("dayNight").src="day.jpg";
    document.getElementById("day").style.backgroundColor="orange";
    document.getElementById("night").style.backgroundColor="white";
    document.getElementById("day").style.color="white";
    document.getElementById("night").style.color="black";
    document.getElementById("head").textContent="Day";
    document.getElementById("head").style.color="orange";
}
function night(){
    document.getElementById("dayNight").src="night.jpg";
    document.getElementById("night").style.backgroundColor="skyblue";
    document.getElementById("day").style.backgroundColor="white";
    document.getElementById("night").style.color="black";
    document.getElementById("day").style.color="black";
    document.getElementById("head").textContent="Night";
    document.getElementById("head").style.color="skyblue";
}