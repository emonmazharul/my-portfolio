const hamburgerBtn  = document.querySelector('nav>div>a');
const form = document.querySelector('form');
const submit_button = document.querySelector('#submit_button');
const info_success = document.querySelector('#info_success');
const info_error = document.querySelector('#info_error');
const close_button = document.querySelector('#close_btn');
const copyright = document.querySelector('footer p');


let mySwiper = new Swiper('.swiper-container', {
	pagination: {
		el:'.swiper-pagination',
	},
	autoplay: {
		delay:4000,
	},
})

hamburgerBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const navbar = document.querySelector('nav>ul');
	navbar.classList.toggle('mobile_nav');
})

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const sender_name = e.target.elements.name.value;
	const sender_email = e.target.elements.email.value;
	const message = e.target.elements.message.value;
	info_success.style.display = 'none';
	info_error.style.display = 'none';
	submit_button.disabled = true;
	axios.post('/sendmail', {sender_name,sender_email,message})
		.then(res => {
			console.log(res.data);
			info_success.style.display = 'flex';
			submit_button.disabled = false;
		})
		.catch(e => {
			info_error.style.display = 'flex';
			console.log(e);
			submit_button.disabled = false;
		})
})

close_btn.addEventListener('click', () => {
	const job_thread = document.querySelector('.job_thread');
	job_thread.style.display = 'none';
})
document.addEventListener("DOMContentLoaded" , () => {
 	copyright.innerHTML += ` ${new Date().getFullYear()}`
})
