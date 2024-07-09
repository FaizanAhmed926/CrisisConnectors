//........................................ navbar starts .....................................................
const open = document.querySelector('.hamburger');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
	open.firstElementChild.style.display = "none";
	if (tl.reversed()) {
		tl.play();
	} else {
		tl.to("#hamburger-navbar", {
			duration: 1,
			delay: 0.5,
			x: 600,
			opacity: 1,
			scale: 1
		})
		tl.to('nav', { right: 0 })
			.to('nav', { height: '100vh' }, '-=.1')
			.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
			.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
			.to('nav h2', { opacity: 1 }, '-=1');
	}
});

close.addEventListener('click', () => {
	tl.reverse();
	open.firstElementChild.style.display = "block";
});
// .................................................navbar ends...............................................

// ................................................page1 starts............................................
var t2 = gsap.timeline({ defaults: { duration: 2, ease: 'expo.inOut' } });
t2.from(".page1-first h1,.page1-first h3", {
	x: -500,
	delay: 0.5,
	stagger: 1,
	opacity: 0,
	scale: 0,
})


let a=document.getElementById("page2").getElementsByTagName("a");
a[0].addEventListener("click",()=>{
    alert("This link shall take you to a page outside this website");
})
a[1].addEventListener("click",()=>{
    alert("This link shall take you to a page outside this website");
})
a[2].addEventListener("click",()=>{
    alert("This link shall take you to a page outside this website");
})
a[3].addEventListener("click",()=>{
    alert("This link shall take you to a page outside this website");
})
a[4].addEventListener("click",()=>{
    alert("This link shall take you to a page outside this website");
})
a[5].addEventListener("click",()=>{
    alert("This link shall take you to a page outside this website");
})
a[6].addEventListener("click",()=>{
    alert("This link shall take you to a page outside this website");
})
a[7].addEventListener("click",()=>{
    alert("This link shall take you to a page outside this website");
})
a[8].addEventListener("click",()=>{
    alert("This link shall take you to a page outside this website");
})
// .......................................................


const getWeather=(city)=>{
    city_name.innerHTML=city;
    async function fun()
    {
        const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '569c89268dmsh7160f56707e4c9dp1532a8jsnea0bd4f91d7d',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.text();
        //     console.log(result);
        //     // console.log(await response.text());
        // } catch (error) {
        //     console.error(error);
        // }
        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parse the JSON response
            console.log(result)
            const temperature = result.temp;
            // console.log('Temperature:', temperature);
            // cloud_pct=response.cloud_pct;
            feels_like.innerHTML=result.feels_like;
            humidity.innerHTML=result.humidity;
            max_temp.innerHTML=result.max_temp;
            min_temp.innerHTML=result.min_temp;
            sunrise.innerHTML=result.sunrise;
            sunset.innerHTML=result.sunset;
            temp.innerHTML=result.temp;
            wind_degrees.innerHTML=result.wind_degrees;
            wind_speed.innerHTML=result.wind_speed;
            temp1.innerHTML=result.temp+"<span>°c</span>";
            humidity1.innerHTML=result.humidity+"%";
            wind_speed1.innerHTML=result.wind_speed+"km/h";
        } catch (error) {
            console.error(error);
        }
    }
    fun()
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})
// getWeather("delhi");