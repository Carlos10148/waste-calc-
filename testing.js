





function compute() {
    var moeEl =parseFloat(document.getElementById('moe').value);
    var psEl = parseFloat(document.getElementById('ps').value);
    var ansEl = document.getElementById('answers');
    document.getElementById('moe').focus()



    var count = 0
    count += moeEl/100
    var count1 = 0
    count1 += psEl
    var total = "Answer: n = "
    var sum =Math.ceil(count1/(1+(count1*(count*count))))
    var total = "Answer: n = " + sum
    ansEl.innerHTML = (total)

}


document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
    'use strict';
    var eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform  = "rotate("+ rot +"deg)"
    })
}





function runClock() {
	const now = new Date();
	const hour = now.getHours() % 12;
	const min = now.getMinutes();
	const sec = now.getSeconds();
	const ms = now.getMilliseconds();
	
	const clock = document.querySelector('.clock');
	const hourHand = clock.querySelector('.hour');
	const minuteHand = clock.querySelector('.minute');
	const secondHand = clock.querySelector('.second');
	
	const hourRotation = 30 * hour + 0.5 * min;
	const minRotation = 6 * min + 0.1 * sec;
	const secRotation = 6 * sec + 0.006 * ms;
	hourHand.style.transform = `rotate(${hourRotation}deg)`;
	minuteHand.style.transform = `rotate(${minRotation}deg)`;
	secondHand.style.transform = `rotate(${secRotation}deg)`;
	
	requestAnimationFrame(runClock)
};

runClock();